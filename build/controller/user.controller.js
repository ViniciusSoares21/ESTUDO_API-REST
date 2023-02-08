"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
class UserController {
    constructor(_UserService = new user_service_1.default()) {
        this._UserService = _UserService;
        this.getByUser = async (_req, res) => {
            try {
                const user = await this._UserService.getByUser();
                return res.status(200).json(user);
            }
            catch (error) {
                console.log(error);
            }
        };
        this.createUser = async (req, res) => {
            const newUser = await this._UserService.createUser(req.body);
            return res.status(201).json(newUser);
        };
        this.updateEmail = async (req, res) => {
            const upEmial = await this._UserService
                .updateEmail(req.body.email, req.params.id);
            return res.status(200).json(upEmial);
        };
        this.deletUser = async (req, res) => {
            const user = await this._UserService.deletUser(req.params.id);
            return res.status(200).json(user);
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map