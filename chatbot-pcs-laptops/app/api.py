from fastapi import APIRouter
from fastapi.responses import FileResponse
from pydantic import BaseModel
from app.rag_engine import generate_rag_response

router = APIRouter()


class Query(BaseModel):
    question: str


@router.post("/ask")
def ask_question(query: Query):
    response = generate_rag_response(query.question, "http://localhost:5000")
    return {"response": response}


@router.get("/chatbot_prompt_config.json")
def get_config():
    return FileResponse("chatbot_prompt_config.json", media_type="application/json")
