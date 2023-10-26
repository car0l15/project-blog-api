import Joi, { Schema, ValidationResult } from 'joi';
import { Response, Request, NextFunction } from 'express';

const categoryDTO: Schema = Joi.object({
    name: Joi.string().label('name').min(3).required(),
}).messages({
    'any.required': '{{ #label }} is required',
    'string.min': '{{#label}} length must be at least {{#limit}} characters long'
})

const categoryValidation = (req: Request, res: Response, next: NextFunction): Response | void => 
{
    const { error } : ValidationResult = categoryDTO.validate(req.body, { abortEarly: true });

    if(!error) return next()

    const errorMessage = error.message;

    if(errorMessage.includes('require') || errorMessage.includes('length must be at least')) {
        return res.status(400).json({ message: errorMessage });
    }

    return res.status(400).json({ message: 'Invalid request' });
}

export default categoryValidation;