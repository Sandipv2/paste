import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/pasteApp`)
        console.log('Database connected.')
    } catch(err) {
        console.log("MongoDB connection erroe: ",err.message)
    }
}

export default connectDB;