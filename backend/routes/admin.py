from fastapi import APIRouter
from database import get_connection

router = APIRouter()

@router.get("/summary")
def get_summary():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT COUNT(*) as total_trips FROM trips")
    total_trips = cur.fetchone()["total_trips"]

    cur.execute("SELECT COUNT(*) as total_feedback FROM feedback")
    total_feedback = cur.fetchone()["total_feedback"]

    cur.execute("SELECT AVG(rating) as avg_rating FROM feedback")
    avg_rating = cur.fetchone()["avg_rating"]

    conn.close()
    return {
        "total_trips": total_trips,
        "total_feedback": total_feedback,
        "average_rating": round(avg_rating, 2) if avg_rating else None
    }
