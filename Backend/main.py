from fastapi import FastAPI,Body
from pathlib import Path
import json
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

from Backend.services.jd_parser import job_description
from Backend.services.matcher import match_profile_with_job
from Backend.services.chatbot import chat_with_profile
from Backend.models.chat import ChatRequest
app=FastAPI(
    title="AI recruiter portfolio API",
    description="API for resume analysis, job matching, and recruiter chatbot",
    version="1.0.0",

)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROFILE_PATH= Path(__file__).parent/"data"/"profile.json"

@app.get("/")

def root():
    return {"message": "AI Recruiter Portfolio API is running"}

@app.get("/api/profile")
def get_profile():
    with open(PROFILE_PATH,"r",encoding="utf-8")as file:
        return json.load(file)

@app.post("/api/analyze_job")
def analyze_job(job_description_text:str):
    return job_description(job_description_text)

@app.post("/api/match")
def match_job(job_description_text: str = Body(...)):
    with open(PROFILE_PATH, "r", encoding="utf-8") as file:
        profile = json.load(file)

    jd = job_description(job_description_text)

    return match_profile_with_job(profile, jd)

    with open(PROFILE_PATH, "r", encoding="utf-8") as file:
        profile = json.load(file)

    jd = job_description(job_description_text)

    return match_profile_with_job(profile, jd)

@app.post("/api/chat")
def chat(request: ChatRequest):

    with open(PROFILE_PATH, "r", encoding="utf-8") as file:
        profile = json.load(file)

    messages = [
        message.model_dump()
        for message in request.messages
    ]

    response = chat_with_profile(profile, messages)

    return StreamingResponse(
        response,
        media_type="text/plain"
    )