import { Router } from "express";
import { create, remove, update } from "../controllers/paste.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const pasteRouter = Router();

pasteRouter.post('/create', verifyToken, create);
pasteRouter.post('/remove/:pasteId', verifyToken, remove);
pasteRouter.post('/update', verifyToken, update);

export default pasteRouter;