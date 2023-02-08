"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound extends Error {
    constructor(message, statusCode = 422) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.default = NotFound;
//# sourceMappingURL=hadlerError.js.map