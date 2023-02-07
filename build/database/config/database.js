"use strict";
require("dotenv/config");
const config = {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: 'estudos_api',
    host: process.env.MYSQL_HOSTNAME || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3307,
    dialect: 'mysql',
};
module.exports = config;
//# sourceMappingURL=database.js.map