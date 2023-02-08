"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
const NotFound_1 = require("../utils/errors/NotFound");
class UserService {
    constructor(_UserModel = Users_1.default) {
        this._UserModel = _UserModel;
    }
    async getByUser() {
        const user = await this._UserModel.findAll();
        return user;
    }
    async getById(id) {
        const user = await this._UserModel.findOne({ where: { id } });
        return user;
    }
    async createUser(user) {
        const newUser = await this._UserModel.create({ ...user });
        return newUser;
    }
    async updateEmail(email, id) {
        const existUser = await this.getById(id);
        if (!existUser) {
            throw new NotFound_1.default('pessoa não cadastrada');
        }
        const upEmail = await this._UserModel.update({ email }, { where: { id } });
        return upEmail;
    }
    async deletUser(id) {
        const existUser = await this.getById(id);
        if (!existUser) {
            throw new NotFound_1.default('pessoa não cadastrada');
        }
        const user = await this._UserModel.destroy({ where: { id } });
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map