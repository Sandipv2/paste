import express from 'express';
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)

app.listen(PORT, () => {
    connectDB();
    console.log(`Running at port ${PORT}`)
})