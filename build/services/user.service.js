"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
class UserService {
    constructor(_UserModel = Users_1.default) {
        this._UserModel = _UserModel;
    }
    async getByUser() {
        const user = await this._UserModel.findAll();
        return user;
    }
    async createUser(user) {
        const newUser = await this._UserModel.create({ ...user });
        return newUser;
    }
    async updateEmail(email, id) {
        const upEmail = await this._UserModel.update({ email }, { where: { id } });
        return upEmail;
    }
    async deletUser(id) {
        const user = await this._UserModel.destroy({ where: { id } });
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map