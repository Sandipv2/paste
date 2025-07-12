# 📋 Paste

Paste is a full-stack web app for secure note and code snippet sharing.

---

### Site is live [here 🚀](https://paste-7smj.onrender.com/)
Use following credentials for testing:
   - Email: guest@test.com
   - Pass: test

---

## ✨ Features

- 🔐 **User Authentication:** JWT-based login, registration, and logout.
- 📧 **Email Verification:** OTP-based verification via Nodemailer & Brevo SMTP.
- 🔑 **Password Reset:** Secure password reset links sent to your email.
- 📝 **Paste Management:** Create, view, update, and delete your own pastes.
- 📱 **Responsive UI:** Built with Tailwind CSS for a sleek, modern look.
- 🛡️ **Protected Routes:** Only authenticated & verified users access dashboard and paste features.
- ⚡ **State Management:** Zustand for fast, efficient frontend state.
- 🛡️ **Security:** Passwords hashed with bcrypt, secure cookies, and environment variables.

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React.js 19**
- **Tailwind CSS**
- **Zustand** – Global state management
- **React Router DOM** – Routing
- **React Hook Form** – Form handling and validation
- **React Icons** – Icon library
- **React Hot Toast** – Notifications

### 🔹 Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT & Bcrypt** – Auth and password security
- **Nodemailer + Brevo SMTP** – Mailing & verification

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