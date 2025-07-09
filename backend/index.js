import express from 'express';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRouter from "./routes/auth.route.js";
import pasteRouter from './routes/paste.route.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://192.168.123.105:5173'],
    credentials: true
}))

app.use('/api/auth', authRouter);
app.use('/api/pastes', pasteRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Running at port ${PORT}`)
})