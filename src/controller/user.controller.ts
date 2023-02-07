import { Request, Response } from 'express';
import UserService from "../services/user.service";

export default class UserController {
  constructor(private _UserService = new UserService()) {}

  public getByUser = async (req: Request, res: Response) => {
    try {
      const user = await this._UserService.getByUser();
    return res.status(200).json(user);
    } catch (error) {
      console.log(error)
    }
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  }
}