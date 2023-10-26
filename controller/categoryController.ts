import { Request, Response } from "express";
import { createCategory } from "../service/categoryService";

const createNewCategory = async (req: Request, res: Response) => 
{
    const result = await createCategory(req.body);
    res.status(201).json(result);
}

export { createNewCategory }