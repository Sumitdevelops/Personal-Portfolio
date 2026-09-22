from pydantic import BaseModel

class JobDescription(BaseModel):
    job_title: str
    preferred_skills: list[str] | None = None
    requirements: list[str] | None = None
    education_required: str | None = None
    skills_required: list[str] | None = None
    responsibilities: list[str] | None = None
    experience_required: list[str] | None = None