# 👥 Friend Suggestion System Using Graph Algorithms

This project is built under **Seasons of Code 2025** at **IIT Bombay**, mentored by [Mradul Sonkar](https://github.com/mradul-001).

A minimal full-stack web application that recommends friends to users based on their connections, powered by graph algorithms.

---

## 🛠️ Tech Stack

- ⚛️ **Frontend:** React (Vite) + TailwindCSS  
- 🚀 **Backend:** FastAPI (Python)  
- 🗃️ **Database:** MySQL  
- 🧠 **Algorithms (Coming up):** Graph-based logic (e.g., mutual friends)

---

## 📁 Project Structure

```
friend-suggestion-system/
├── frontend/   # React frontend (Vite + TailwindCSS)
├── backend/    # FastAPI backend + database logic
├── README.md
```

---

## 🚀 Getting Started

### 🔹 1. Clone the Repository

```bash
git clone git@github.com-jashan:jashansings/friend-suggestion-system.git
cd friend-suggestion-system
```

---

### 🔹 2. Run the Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend will be live at: [http://localhost:5173](http://localhost:5173)

---

### 🔹 3. Run the Backend (FastAPI)

```bash
cd backend
# Create virtual environment if needed
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## ✅ Features Completed (Week 1–4)

- [x] React frontend setup with TailwindCSS
- [x] Basic UI design and routing
- [x] User authentication (signup & login)
- [x] Backend setup with FastAPI
- [x] MySQL integration and user storage
- [x] Working API endpoints

---

## 🧠 Features Completed (Week 5–6)

- [ ] Graph-based friend suggestion logic
- [ ] Mutual friends via BFS/DFS
- [ ] Recommendation API
- [ ] Suggested friends UI section
- [ ] Visual representation of friend connections

---

## 👨‍💻 Developer Info

- **Name:** Jashanpreet Singh  
- **Institute:** IIT Bombay  
- **Program:** Seasons of Code 2025  
- **Mentor:** Mradul Sonkar  
- **GitHub:** [@jashansings](https://github.com/jashansings)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
