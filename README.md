# 📋 Paste

Paste is a full-stack web app for secure note and code snippet sharing.

---

### 🌐 Site is live [here 🚀](https://paste-7smj.onrender.com/)

Use the following credentials for testing:
- **Email:** guest@test.com  
- **Password:** test

---

## ✨ Features

- 🔐 **User Authentication:** JWT-based registration, login, and logout
- 📧 **Email Verification:** OTP-based verification using Nodemailer & Brevo SMTP
- 🔑 **Password Reset:** Secure password reset via email token
- 📝 **Paste Management:** Create, view, update, and delete personal pastes
- 🛡️ **Protected Routes:** Only authenticated & verified users can access private resources
- ⚡ **State Management:** Zustand for efficient global state handling
- 📱 **Responsive UI:** Built with Tailwind CSS
- 🛡️ **Security:** Bcrypt password hashing, HTTP-only cookies, environment variables

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js 19
- Tailwind CSS
- Zustand
- React Router DOM
- React Hook Form
- React Icons
- React Hot Toast

### 🔹 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt
- Nodemailer + Brevo SMTP

---

## 📡 API Documentation

### Base URL
https://paste-7smj.onrender.com/api

Local:
http://localhost:5000/api


### 🔐 Auth Routes (`/api/auth`)

| Method | Endpoint | Description
|------|---------|-------------|
| POST | `/register` | Register a new user
| POST | `/verify-email` | Verify email using OTP
| POST | `/login` | Login user
| POST | `/logout` | Logout user
| POST | `/forgot-password` | Send password reset link
| POST | `/reset-password/:token` | Reset password 
| GET | `/check-auth` | Check authentication status 
| DELETE | `/delete-account` | Delete user account

---

### 📝 Paste Routes (`/api/pastes`)

| Method | Endpoint | Description
|------|---------|-------------|
| GET | `/:pasteId` | Get a single paste (public)
| POST | `/` | Create a new paste
| GET | `/` | Get all user pastes
| PUT | `/:pasteId` | Update a paste
| DELETE | `/:pasteId` | Delete a paste

---

## ⚡ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/paste.git
   cd paste
   ```

2. **Setup environment variables:**
   - Create a `.env` file in the root directory and add:
     ```
     MONGODB_URL=your_mongodb_url
     SMTP_SERVER=smtp-relay.brevo.com
     SMTP_USER=your_brevo_email
     SMTP_PASS=your_brevo_password
     SMTP_PORT=587
     SENDER_EMAIL=your_email
     JWT_SECRET=your_jwt_secret
     NODE_ENV=development
     FRONTEND_URL=http://localhost:5173
     ```

   - Create a `.env` file in the frontend directory and add:
     ```
     VITE_FRONTEND_URL=http://localhost:5173
     ```

3. **Install dependencies:**
   ```bash
   npm run build
   ```

4. **Start the server:**
   ```bash
   npm run start
   ```

   ## 📁 Folder Structure

```
paste/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── emails/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
|
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── index.css
│   │   └── Layout.jsx
│   │   └── main.jsx
│   └── vite.config.js
│   └── .env
│   └── index.html
│   └── package-lock.json
│   └── package.json
|
├── .env
└── .gitignore
├── package-lock.json 
├── package.json               
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

**Made with ❤️ by Sandip Varma**
