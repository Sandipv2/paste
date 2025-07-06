import { Router } from "express";
import { create } from "../controllers/paste.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const pasteRouter = Router();

pasteRouter.post('/create', verifyToken, create);

export default pasteRouter;