import { Request, Response } from "express";
import { getAllUsers, createUsers } from "../service/userService";

const getUsers = async(req: Request, res: Response) => 
{
   const result = await getAllUsers();
   res.status(200).json(result);
}

const createNewUser = async(req: Request, res: Response) =>
{
    const result = await createUsers(req.body);
    console.log(req.body, "controller")
    res.status(201).json(result);
}


export { getUsers, createNewUser};