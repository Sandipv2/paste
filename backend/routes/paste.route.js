import { Router } from "express";
import { create, remove } from "../controllers/paste.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const pasteRouter = Router();

pasteRouter.post('/create', verifyToken, create);
pasteRouter.post('/remove/:pasteId', verifyToken, remove);

export default pasteRouter;