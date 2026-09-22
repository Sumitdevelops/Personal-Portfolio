import os
import json
from dotenv import load_dotenv
from groq import Groq

from Backend.models.job_description import JobDescription
from Backend.models.match_result import MatchResult

load_dotenv()

client = Groq(api_key=os.getenv("API_KEY") or os.getenv("GROQ_API_KEY"))

match_schema = MatchResult.model_json_schema()


def match_profile_with_job(
    profile: dict,
    job_description: JobDescription
) -> MatchResult:

    system_prompt = f"""
You are an expert technical recruiter.

Compare the candidate's profile against the job description.

Return the result according to the following schema:

{match_schema}

Return ONLY valid JSON.

Evaluate:
- Required skills
- Preferred skills
- Relevant projects
- Professional experience
- Education
- Responsibilities
- Overall suitability

The candidate is a fresher if the experience list is empty.

Do not penalize the candidate for lack of professional experience when the job does not require it.

Do not invent candidate skills, experience, education, projects, or achievements.

The score must be an integer between 0 and 100.

Use the following general interpretation:
- 80-100: Strong Fit
- 60-79: Good Fit
- 40-59: Potential Fit
- 0-39: Low Fit

Base the score on the overall alignment between the candidate and the job description.

Give a concise but evidence-based explanation.
"""

    user_prompt = f"""
CANDIDATE PROFILE:

{json.dumps(profile, indent=2)}

JOB DESCRIPTION:

{job_description.model_dump_json(indent=2)}
"""

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ]

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        temperature=0,
        response_format={"type": "json_object"},
        messages=messages
    )

    answer = response.choices[0].message.content
    raw_json = json.loads(answer)

    return MatchResult(**raw_json)