"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, _next) => {
    return res.status(err.statusCode || 500).json({ error: err.message });
};
exports.default = error;
//# sourceMappingURL=error.js.map