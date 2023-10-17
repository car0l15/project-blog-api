import { Router } from "express";

const { createNewUser } = require('../controller/userController');

const userRouter = Router();

userRouter.post('/user', createNewUser);

module.exports = userRouter;