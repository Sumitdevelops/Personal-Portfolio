import os
import json
from dotenv import load_dotenv
from groq import Groq
from Backend.models.resume import Resume

load_dotenv()

client = Groq(api_key=os.getenv("API_KEY") or os.getenv("GROQ_API_KEY"))

resume_schema = Resume.model_json_schema()

def analyse_resume(resume_text: str) -> Resume:
    system_prompt = f"""
You are an expert HR recruiter who analyzes candidates' resumes.

Extract the resume according to the following schema:

{resume_schema}

Return ONLY valid JSON.

Do not add any fields that are not present in the schema.
Do not invent information.
Extract only information explicitly present in the resume.

For each work experience:
- Extract the company name.
- Extract the candidate's role or job title.
- Calculate the duration in years if start and end dates are explicitly available.
- If the duration cannot be determined, use null.
- Extract projects, responsibilities, or significant work associated with that specific experience.
- Keep each company's experience separate.

Extract every relevant skill.
Extract all education entries.
Extract contact information when present.
"""

    user_prompt = f"""
Analyze the following resume:

{resume_text}
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

    return Resume(**raw_json)