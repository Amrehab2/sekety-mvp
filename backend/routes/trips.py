from fastapi import APIRouter, HTTPException
from models import Trip
from database import get_connection
from datetime import datetime, timedelta

router = APIRouter()

@router.post("/")
def add_trip(trip: Trip):
    conn = get_connection()
    cur = conn.cursor()

    # Timestamp validation: no trips with same origin/destination within 3 minutes
    cur.execute("""
        SELECT * FROM trips
        WHERE origin=? AND destination=?
        ORDER BY departure_time DESC LIMIT 1
    """, (trip.origin, trip.destination))
    last_trip = cur.fetchone()

    if last_trip:
        last_time = datetime.strptime(last_trip["departure_time"], "%Y-%m-%d %H:%M:%S")
        new_time = datetime.strptime(trip.departure_time, "%Y-%m-%d %H:%M:%S")
        if abs((new_time - last_time).total_seconds()) < 180:
            raise HTTPException(status_code=400, detail="Duplicate trip detected (within 3 minutes).")

    cur.execute(
        "INSERT INTO trips (origin, destination, fare, departure_time, station) VALUES (?, ?, ?, ?, ?)",
        (trip.origin, trip.destination, trip.fare, trip.departure_time, trip.station)
    )

    conn.commit()
    conn.close()
    return {"message": "Trip added successfully ✅"}
    

@router.get("/")
def list_trips():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM trips ORDER BY id DESC")
    trips = [dict(row) for row in cur.fetchall()]
    conn.close()
    return trips
