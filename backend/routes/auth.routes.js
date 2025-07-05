import { Router } from "express";
import { register, verifyEmail, login, logout } from "../controllers/auth.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/verify-email", verifyToken, verifyEmail);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;
