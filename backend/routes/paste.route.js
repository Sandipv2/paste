import { Router } from "express";
import { create, getOnePaste, getPastes, remove, update } from "../controllers/paste.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const pasteRouter = Router();


pasteRouter.get('/:pasteId', getOnePaste);

pasteRouter.use(verifyToken);

pasteRouter
    .route('/')
    .post(create)
    .get(getPastes);

pasteRouter
    .route('/:pasteId')
    .put(update)
    .delete(remove);

export default pasteRouter;