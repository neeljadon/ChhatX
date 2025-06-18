# 💬 ChhatX - Full Stack Chat Application

ChhatX is a real-time chat application built using the MERN architecture with **MySQL** instead of MongoDB. It allows users to register, log in, and send/receive messages in a modern WhatsApp-style interface.

---

## 📚 Tech Stack

- **Frontend**: React.js, Axios, React Router, CSS, Bootstrap
- **Backend**: Node.js, Express.js, MySQL
- **Database**: MySQL
- **Others**: bcrypt, dotenv, nodemon, cors

---

## 📁 Project Structure

```
ChatX/
├── backend/       # Express server, API routes, DB config
├── chatapp/      # React app for UI
├── README.md      # You're reading it!
```

---

## 🔐 Features

- 📝 User Registration & Login
- 💬 One-to-One Real-Time Messaging
- 📦 RESTful API Integration
- 🔒 Secure Password Storage with bcrypt
- 🌐 Cross-Origin Communication via CORS

---

## 🖥️ Frontend Setup (React)

### Install & Run:

```bash
cd chatapp
npm install
npm start
```

### Key Components:

- `App.js` – Main layout structure
- `components/Sidebar.jsx` – List of users
- `components/ChatWindow.jsx` – Message area
- `components/ChatMessages.jsx` – Message display logic

> ⚠️ Make sure the backend server is running at the correct URL/port, and set `"proxy": "http://localhost:5000"` in `frontend/package.json` for API calls.

---

## 🔧 Backend Setup (Node + Express + MySQL)

### Install & Run:

```bash
cd backend
npm install
npm run dev
```

> Ensure you have a `.env` file configured properly.

### Example `.env` File:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=chatx
```

### Folder Overview:

- `routes/` – API endpoints (e.g. `/auth`, `/messages`)
- `controllers/` – Logic for authentication & messaging
- `models/` – (Optional) DB models or helpers
- `config/db.js` – MySQL database connection
- `server.js` – App entry point

---

## 🧾 API Endpoints

### 🔐 Authentication

- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Authenticate user

### 💬 Messaging

- `POST /api/messages/send` – Send a message  
- `GET /api/messages/:sender/:receiver` – Fetch messages between two users

---

## 🗄️ MySQL Table Schema

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sender VARCHAR(255) NOT NULL,
  receiver VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🧪 Testing the App

1. Run the backend: `npm run dev` in `backend/`
2. Run the frontend: `npm start` in `frontend/`
3. Register/login and start chatting!

---


## 🌍 Deployment Tips

- Use **Render**, **Railway**, or **Heroku** for backend hosting
- Use **Netlify** or **Vercel** for frontend deployment
- Set environment variables securely in production

---

## 👨‍💻 Author

**Neel Shankar**  
National-level footballer turned developer. Passionate about building sleek and scalable full-stack applications.


