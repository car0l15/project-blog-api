import { Router } from "express";
import { getUsers, createNewUser, getUserId } from "../controller/userController";
import userValidation from "../validations/user.validations";

const userRouter = Router();

userRouter.get('/user', userValidation ,getUsers);
userRouter.post('/user', createNewUser);
userRouter.get('/user/:id', getUserId )

export default userRouter;