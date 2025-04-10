# JobTracker-Frontend
# 💼 Job Tracker

A full-stack web application to track your job applications by status — Applied, Offered, Rejected, and Recent — all in a clean and minimal interface. Built using **React + Tailwind CSS** for the frontend and **Node.js + Express + MongoDB** for the backend.

![image](https://github.com/user-attachments/assets/22720911-4d92-492b-a735-a9a718af91c5)



![image](https://github.com/user-attachments/assets/18837f75-b5a6-4e72-83ae-056a013ac36d)


---

## 🚀 Features

- ✨ Clean UI to track job applications
- 🔐 User Authentication with JWT
- 📅 Job sorting by date and time
- ✅ Add / Update / Delete job entries
- 🧾 Four job categories:
  - **Recent** – sorted by latest date/time
  - **Applied** – jobs you've applied for
  - **Offered** – jobs you've received offers from
  - **Rejected** – jobs that didn't work out

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS** (with `@tailwindcss/vite`)
- **Context API**
- **React Hooks** – `useState`, `useEffect`, etc.
- **React Router DOM**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **Zod** – Schema validation
- **bcrypt** – Password hashing
- **CORS** – Cross-origin support

---

## 🧱 Architecture Overview

plaintext
Client (React + Tailwind)
│
├── Routes: /login, /signup, /home
├── Context: AuthContext, JobContext
├── Components:
│   ├── LoginForm
│   ├── SignupForm
│   ├── JobCard
│   ├── AddJobModal
│   └── UpdateJobModal
│
└── Hooks: useState, useContext

Backend (Express + MongoDB)
│
├── Routes:
│   ├── POST /signup
│   ├── POST /login
│   ├── POST /addJob
│   ├── GET /
│   ├── PUT /updateJob/:id
│   └── DELETE /deleteJob/:id
│
└── Middleware:
    └── authMiddleware.js – JWT token verification

🔐 JWT Authentication (How It Works)

1.On signup/login, the server generates a JWT token using a secret key.

2.This token is sent to the frontend and stored (in localStorage or context).

3.For protected routes (like adding or updating jobs), the frontend attaches the token in headers.

4.On the server side, the auth middleware verifies the token and grants access
```

  {
  companyName: String,
  role: String,
  status: String, // Applied | Offered | Rejected 
  url: String,
  date: Date
  url:String
}

```
🧑‍💻 Getting Started
1. Clone the Repository

```
git clone https://github.com/yourusername/job-tracker.git
cd job-tracker
```
2. Backend Setup
```
bash
Copy
Edit
cd backend
npm install

```
⚙️ Create .env file
```
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
🔁 Start the Backend
```
bash
Copy
Edit
npm run dev
```
3. Frontend Setup
```
bash
Copy
Edit
cd frontend
npm install
```
⚙️ Tailwind CSS Setup
```
bash
Copy
Edit
npm install -D tailwindcss @tailwindcss/vite
```
Update vite.config.js:

```
js
Copy
Edit
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()]
}
```
```
Include in index.css or main.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
```
▶️ Run the Frontend
```
bash
Copy
Edit
npm run dev
```
✨ UI Preview
🔐 Login / Signup

📊 Dashboard
Sorted job cards

Update & delete buttons

Easy access to roles & companies

🤝 Contributing
Contributions, issues, and feature requests are welcome!


🧑‍💻 Author
Shashi Suhas
GitHub | www.linkedin.com/in/shashisuhas/
