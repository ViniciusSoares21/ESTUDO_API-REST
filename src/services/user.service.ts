import IUser from '../interfaces/user';
import User from '../database/models/Users';
import NotFound from '../utils/errors/NotFound';


export default class UserService {
  constructor(private _UserModel = User) {}

  public async getByUser() {
    const user = await this._UserModel.findAll();

    return user;
  }

  private async getById(id: string) {
    const user = await this._UserModel.findOne({ where: { id }});

    return user
  }

  public async createUser(user: IUser) {
    const newUser = await this._UserModel.create({ ...user });

    return newUser
  }

  public async updateEmail(email:string, id:string) {
    const existUser = await this.getById(id);
  
    if(!existUser) {
      throw new NotFound('pessoa não cadastrada')
    } 
    const upEmail = await this._UserModel.update({ email }, { where: { id } });

    return upEmail;
  }

  public async deletUser(id: string) {
    const existUser = await this.getById(id);
  
    if(!existUser) {
      throw new NotFound('pessoa não cadastrada')
    } 
    
    const user = await this._UserModel.destroy({where: { id } });

    return user;
  }
}