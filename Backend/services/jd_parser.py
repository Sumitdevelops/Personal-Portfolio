import os
import json

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("API_KEY") or os.getenv("GROQ_API_KEY"))

from Backend.models.job_description import JobDescription

job_description_schema = JobDescription.model_json_schema()

def job_description(jb_description):
    system_prompt = f"""
You are an expert HR recruiter.

Extract the given job description according to the following schema:

{job_description_schema}

Return ONLY valid JSON.

Do not add any fields that are not present in the schema.
Do not invent information.
Extract only information explicitly present in the job description.
Put mandatory skills in skills_required.
Put optional or preferred skills in preferred_skills.
Put job responsibilities in responsibilities.
Put education requirements in education_required.
Put experience requirements in experience_required.
"""

    user_prompt = f"""
Extract the following job description:

{jb_description}
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
    raw_data = json.loads(answer)

    return JobDescription(**raw_data)
