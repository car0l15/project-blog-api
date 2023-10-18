import { Router } from "express";
import getUsers from "../controller/userController";



const userRouter = Router();


// userRouter.post('/user', createNewUser);

userRouter.get('/user', getUsers);
module.exports = userRouter;