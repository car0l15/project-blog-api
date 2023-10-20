import { Router } from "express";
import { getUsers, createNewUser } from "../controller/userController";
import userValidation from "../validations/user.validations";

const userRouter = Router();

userRouter.get('/user', getUsers);
userRouter.post('/user', createNewUser);

export default userRouter;