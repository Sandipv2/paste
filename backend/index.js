import express from "express";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRouter from "./routes/auth.route.js";
import pasteRouter from "./routes/paste.route.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/pastes", pasteRouter);

if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "frontend", "dist");

  app.use(express.static(distPath));

  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Running at port ${PORT}`);
});
