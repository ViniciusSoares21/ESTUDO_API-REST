"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routers_1 = require("./routers");
const app = express();
app.use(express.json());
app.use(routers_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map