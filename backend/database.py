import sqlite3

DB_NAME = "sekety.db"

def get_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_connection()
    cur = conn.cursor()

    # Trips Table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS trips (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        origin TEXT,
        destination TEXT,
        fare REAL,
        departure_time TEXT,
        station TEXT
    );
    """)

    # Feedback Table
    cur.execute("""
    CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name TEXT,
        comment TEXT,
        rating INTEGER
    );
    """)

    conn.commit()
    conn.close()
