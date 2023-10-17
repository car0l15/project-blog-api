import { Request, Response } from "express";
const { createUser } = require('../service/userService');

const createNewUser = async(req: Request, res: Response) => 
{
    const result = await createUser(req.body);

    res.status(201).json({ result });
}

module.exports = {
    createNewUser
}