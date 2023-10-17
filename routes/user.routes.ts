import { Router } from 'express';
const {  createNewUser } = require('../controller/user.controller')

const userRouter = Router();

userRouter.post('/user', createNewUser);

module.exports = userRouter;