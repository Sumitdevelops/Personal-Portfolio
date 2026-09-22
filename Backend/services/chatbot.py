import os
import json
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("API_KEY") or os.getenv("GROQ_API_KEY"))


def chat_with_profile(profile: dict, messages: list[dict]):

    system_prompt = f"""
You are an AI recruiter assistant representing the candidate.

Use the candidate profile below as your only source of truth.

CANDIDATE PROFILE:

{json.dumps(profile, indent=2)}

Rules:
- Answer questions using only information available in the candidate profile.
- Do not invent skills, experience, projects, education, achievements, or other facts.
- If information is not available in the profile, clearly say that it is not available.
- Understand and answer follow-up questions using the conversation history.
- Maintain context across multiple turns.
- Answer in a professional, natural, conversational manner.
- Be concise unless the recruiter asks for more detail.
- When discussing projects, mention relevant technologies and details from the profile.
- When discussing job suitability, base your answer only on the candidate profile.
"""

    chat_messages = [
        {"role": "system", "content": system_prompt},
        *messages
    ]

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        temperature=0,
        messages=chat_messages,
        stream=True

    )
    answer = ""

    for chunk in response:
        content = chunk.choices[0].delta.content

        if content:
            yield content