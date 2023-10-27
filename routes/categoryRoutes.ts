import { Router } from "express";
import { createNewCategory, getAllCategories } from "../controller/categoryController";
import categoryValidation from "../validations/category.validation";

const categoryRouter = Router();

categoryRouter.post('/category', categoryValidation, createNewCategory);
categoryRouter.get('/category',getAllCategories )

export default categoryRouter;