import { Router } from "express";
import {
  register,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  checkAuth,
  resetPassword,
  deleteAccount,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/verify-email", verifyToken, verifyEmail);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password/:token", resetPassword);
authRouter.get("/check-auth", verifyToken, checkAuth);
authRouter.delete("/delete-account", verifyToken, deleteAccount);

export default authRouter;
