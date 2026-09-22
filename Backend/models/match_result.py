from pydantic import BaseModel,Field

class MatchResult(BaseModel):
    score: int = Field(ge=0,le=100)
    matching_skills: list[str] = []
    verdict: str
    missing_required_skills:list[str]=[]
    matching_experience:list[str]=[]
    strengths:list[str]=[]
    weaknesses:list[str]=[]
    explanation:str