import { Router } from "express";
import { createNewCategory } from "../controller/categoryController";

const categoryRouter = Router();

categoryRouter.post('/category', createNewCategory);

export default categoryRouter;