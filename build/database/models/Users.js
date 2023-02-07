"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.STRING,
    },
    email: {
        type: sequelize_1.STRING,
    },
    password: {
        type: sequelize_1.STRING,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=Users.js.map