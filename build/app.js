"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express = require("express");
const error_1 = require("./middlewares/error");
const routers_1 = require("./routers");
const app = express();
app.use(express.json());
app.use(routers_1.default);
app.use(error_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map