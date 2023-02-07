"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
class UserController {
    constructor(_UserService = new user_service_1.default()) {
        this._UserService = _UserService;
        this.getByUser = async (req, res) => {
            try {
                const user = await this._UserService.getByUser();
                return res.status(200).json(user);
            }
            catch (error) {
                console.log(error);
            }
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map