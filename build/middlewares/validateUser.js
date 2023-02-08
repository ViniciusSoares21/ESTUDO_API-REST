"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const BadRequest_1 = require("../utils/errors/BadRequest");
class ValidateUser {
    constructor() {
        this.createUserSchema = joi.object({
            username: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().min(6).required()
        });
        this.createUserValidation = (req, _res, next) => {
            const { error } = this.createUserSchema.validate(req.body);
            if (error)
                throw new BadRequest_1.default(error.details[0].message);
            next();
        };
        this.updateEmailSchema = joi.object({
            email: joi.string().email().required(),
        });
        this.updateUserValidation = (req, res, next) => {
            const { error } = this.updateEmailSchema.validate(req.body);
            if (error)
                throw new BadRequest_1.default(error.details[0].message);
            next();
        };
    }
}
exports.default = ValidateUser;
//# sourceMappingURL=validateUser.js.map