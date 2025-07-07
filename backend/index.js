import express from 'express';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import pasteRouter from './routes/paste.route.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter);
app.use('/api/pastes', pasteRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Running at port ${PORT}`)
})