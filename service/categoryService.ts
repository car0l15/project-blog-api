import Category from "../models/category";

const createCategory = async (nameCategory: string) => 
{
    const category = await Category.create({ nameCategory });

    return category;
}

export { createCategory }