import { Request, Response } from 'express';
import UserService from "../services/user.service";

export default class UserController {
  constructor(private _UserService = new UserService()) {}

  public getByUser = async (_req: Request, res: Response) => {
    try {
      const user = await this._UserService.getByUser();
    return res.status(200).json(user);
    } catch (error) {
      console.log(error)
    }
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      console.log(req.body)
      const newUser = await this._UserService.createUser(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error)
    }
  }

  public updateEmail = async (req: Request, res: Response) => {
    
      const upEmial = await this._UserService.updateEmail(req.body.email, req.params.id);

      return res.status(200).json(upEmial);

  }

  public deletUser = async (req: Request, res: Response) => {
    
    const user = await this._UserService.deletUser(req.params.id);

    return res.status(200).json(user);

}
}