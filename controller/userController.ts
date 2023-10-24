import { Request, Response } from "express";
import { getAllUsers } from "../service/userService";

const getUsers = async(req: Request, res: Response) => {
    const result = await getAllUsers()
   res.status(200).json({ result })
}


export default getUsers;