import { Router } from "express";
import { getUsers, createNewUser, getUserId } from "../controller/userController";

const userRouter = Router();

userRouter.get('/user', getUsers);
userRouter.post('/user', createNewUser);
userRouter.get('/user/:id', getUserId )

export default userRouter;