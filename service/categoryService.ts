import Category from "../models/category";
import category from "../interfaces/ICategory";

const createCategory = async (body: category) => 
{

    const { name } = body;
    const newCategory = await Category.create({ name });

    console.log(newCategory, 'service')

    return newCategory;
}

export { createCategory };