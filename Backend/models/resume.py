
from pydantic import BaseModel

class Experience(BaseModel):
    company: str
    role: str | None=None
    years_worked: int | None = None
    projects: list[str] = []


class Resume(BaseModel):
    experience: list[Experience] = []
    skills: list[str] = []
    education: list[str] = []
    email: str | None = None
    phno: str | None = None
    projects: list[str] = []