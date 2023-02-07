"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3001;
const server = app_1.default.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
exports.default = server;
//# sourceMappingURL=index.js.map