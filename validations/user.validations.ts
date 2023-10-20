import Joi, { Schema, ValidationResult } from 'joi';
import { Response, Request, NextFunction } from 'express';
import User from '../interfaces/IUser';


const userDTO: Schema = Joi.object<User>({ 
    displayName: Joi.string().label('displayName').min(8).required(),
    email: Joi.string().label('email').required(),
    password: Joi.string().label('password').min(6).required(),
    image: Joi.string().label('image'),
}).messages({
    'any.required': '{{ #label }} is required',
    'string.min': '{{#label}} length must be at least {{#limit}} characters long'
})

const userValidation = (req: Request, res: Response, next: NextFunction) : Response | void =>
{
    const { error }: ValidationResult = userDTO.validate(req.body, { abortEarly: true });
    
    if(!error) {
        return next();
    }

    const errorMessage = error.message;

    if(errorMessage.includes('require') || errorMessage.includes('length must be at least')) {
        return res.status(400).json({ message: errorMessage });
    }

    return res.status(400).json({ message: 'Invalid request' })
}

export default userValidation;