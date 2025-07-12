import express from 'express';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import path from 'path';

import authRouter from "./routes/auth.route.js";
import pasteRouter from './routes/paste.route.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))

app.use('/api/auth', authRouter);
app.use('/api/pastes', pasteRouter);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Running at port ${PORT}`)
})