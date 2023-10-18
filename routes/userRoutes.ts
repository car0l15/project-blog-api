import { Router } from "express";
import { getUsers, createNewUser } from "../controller/userController";

const userRouter = Router();

userRouter.get('/user', getUsers);
userRouter.post('/user', createNewUser);

export default userRouter;