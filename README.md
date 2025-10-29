# 🚀 Sekety MVP Prototype  
> **Smart Mobility Powered by Data**

This repository contains a **minimal full-stack prototype** of the **Sekety** application — a data-driven smart mobility ecosystem designed to digitize Egypt’s transport network.  
The goal of this MVP is to **demonstrate core interactions** between Travelers, Admins, and the system using mock data.

---

## 🧩 Project Overview

| Layer | Tech | Description |
|--------|------|-------------|
| **Frontend** | React + TailwindCSS | Traveler & Admin UIs |
| **Backend** | FastAPI (Python) | REST API + SQLite database |
| **Database** | SQLite | Lightweight local storage |
| **Deployment** | Vercel (Frontend) / Render (Backend) | Easy demo hosting |

---

## ✨ Features

### Traveler
- View available trips  
- Submit feedback and ratings  
- Automatically refreshed list of trips  

### Admin
- View total trips, feedback count, and average rating  
- Review recent feedback  
- See live statistics from backend  

### System Logic
- Prevents duplicate trips within 3-minute window  
- Stores feedback and calculates average ratings  
- RESTful API serving both interfaces  

---

## ⚙️ Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload
