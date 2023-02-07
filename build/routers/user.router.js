"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const controller = new user_controller_1.default();
const userRouter = (0, express_1.Router)();
userRouter.get('/users', controller.getByUser);
userRouter.post('/users', controller.createUser);
userRouter.patch('/users/:id', controller.updateEmail);
userRouter.delete('/users/:id', controller.deletUser);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map