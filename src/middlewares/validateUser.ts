import { Request, Response, NextFunction } from 'express';
import * as joi from 'joi';
import BadRequest from '../utils/errors/BadRequest';
import IUser from '../interfaces/user';

export default class ValidateUser {

  private createUserSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
  });
  
  public createUserValidation = (req: Request, _res: Response, next: NextFunction) => {
    const { error } = this.createUserSchema.validate(req.body as IUser);

    if (error)  throw new BadRequest(error.details[0].message);

    next();
  };

  private updateEmailSchema = joi.object({
    email: joi.string().email().required(),
  });
  
  public updateUserValidation = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.updateEmailSchema.validate(req.body);
    if (error)  throw new BadRequest(error.details[0].message);

    next();
  };
}


