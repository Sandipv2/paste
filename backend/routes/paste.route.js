import { Router } from "express";
import { create, getPastes, remove, update } from "../controllers/paste.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const pasteRouter = Router();

pasteRouter.post('/create', verifyToken, create);
pasteRouter.post('/remove/:pasteId', verifyToken, remove);
pasteRouter.post('/update', verifyToken, update);
pasteRouter.get('/all', verifyToken, getPastes);

export default pasteRouter;