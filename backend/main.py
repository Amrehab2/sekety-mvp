from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import trips, feedback, admin
from database import init_db

app = FastAPI(title="Sekety MVP Backend", version="1.0")

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize DB on startup
@app.on_event("startup")
def startup():
    init_db()

# Routers
app.include_router(trips.router, prefix="/api/trips", tags=["Trips"])
app.include_router(feedback.router, prefix="/api/feedback", tags=["Feedback"])
app.include_router(admin.router, prefix="/api/admin", tags=["Admin"])

@app.get("/")
def root():
    return {"message": "Sekety MVP Backend Running ✅"}
