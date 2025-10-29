from pydantic import BaseModel
from typing import Optional

class Trip(BaseModel):
    origin: str
    destination: str
    fare: float
    departure_time: str
    station: Optional[str] = None

class Feedback(BaseModel):
    user_name: str
    comment: str
    rating: int
