import  {Request, Response} from 'express';
const { createUser } = require('../services/user.service')


const createNewUser = async(req: Request, res: Response) => 
{
   const result = await createUser(req.body);
   console.log(result);
   
   res.status(201).json({ result });

}

module.exports = {
    createNewUser
}