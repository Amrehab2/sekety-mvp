from fastapi import APIRouter
from models import Feedback
from database import get_connection

router = APIRouter()

@router.post("/")
def add_feedback(feedback: Feedback):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO feedback (user_name, comment, rating) VALUES (?, ?, ?)",
        (feedback.user_name, feedback.comment, feedback.rating)
    )
    conn.commit()
    conn.close()
    return {"message": "Feedback submitted ✅"}

@router.get("/")
def list_feedback():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM feedback ORDER BY id DESC")
    data = [dict(row) for row in cur.fetchall()]
    conn.close()
    return data
