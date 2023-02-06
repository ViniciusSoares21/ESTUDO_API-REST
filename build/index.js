"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var PORT = 3000;
var server = app_1["default"].listen(PORT, function () { return console.log("Server is running on PORT: " + PORT); });
exports["default"] = server;
