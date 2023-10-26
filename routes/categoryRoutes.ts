import { Router } from "express";
import { createNewCategory } from "../controller/categoryController";
import categoryValidation from "../validations/category.validation";

const categoryRouter = Router();

categoryRouter.post('/category', categoryValidation, createNewCategory);

export default categoryRouter;