import User from '../database/models/Users';

export default class UserService {
  constructor(private _UserModel = User) {}

  public async getByUser() {
    const user = await this._UserModel.findAll();

    return user;
  }
}