# 📝 MERN Todo List

A full-stack **Todo List** application built using the **MERN stack** — MongoDB, Express.js, React, and Node.js.  
This app lets users **add, update, delete, and mark tasks as complete** with a clean and responsive UI.

---

## 🚀 Features

- ✅ Add new todos
- ✏️ Edit existing todos
- 🗑 Delete todos
- ✔ Mark todos as complete/incomplete
- 📱 Fully responsive UI
- 🌐 REST API with Express.js + MongoDB
- ⚡ Fast updates with React state management

---

## 🛠 Tech Stack

**Frontend**  
- React.js  
- Axios (API calls)  
- Tailwind CSS  

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)  

---

## 📂 Folder Structure
```bash
mern-todo/
│
├── backend/           # Express + MongoDB API
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── server.js      # Backend entry point
│   └── package.json
│
├── frontend/          # React app
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Main app pages
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── README.md
└── package.json

```
## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Rahul17903/TODO-MERN.git
cd TODO-MERN

cd ../frontend
npm install

cd backend
npm install

MONGO_URI=your_mongodb_connection_string
PORT=5000

cd backend
npm start

cd frontend
npm start


