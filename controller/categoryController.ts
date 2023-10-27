import { Request, Response } from "express";
import { createCategory, getCategories } from "../service/categoryService";

const createNewCategory = async (req: Request, res: Response) => 
{
    const result = await createCategory(req.body);
    res.status(201).json(result);
}

const getAllCategories = async (req: Request, res: Response) => 
{
    const result = await getCategories();
    res.status(200).json(result);
}

export { createNewCategory, getAllCategories }