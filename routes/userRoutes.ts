import { Router } from "express";
import getUsers from "../controller/userController";

const userRouter = Router();

userRouter.get('/user', getUsers);
export default userRouter;