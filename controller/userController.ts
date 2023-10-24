import { Request, Response } from "express";
import { getAllUsers, createUsers, getUserById } from "../service/userService";


const getUsers = async(req: Request, res: Response) => 
{
   const result = await getAllUsers();
   res.status(200).json(result);
}

const createNewUser =  async(req: Request, res: Response) =>
{
    const result = await createUsers(req.body);
    res.status(201).json(result);
}

const getUserId = async(req: Request, res: Response) => 
{
    const { id } = req.params;

    const result = await getUserById( id );

    if(!result) return res.status(404).json({ message: 'user does not exist'})

    res.status(200).json(result)
}


export { getUsers, createNewUser, getUserId};