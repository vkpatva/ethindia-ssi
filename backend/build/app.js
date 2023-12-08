"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./utils/logger");
const middlewares_1 = __importDefault(require("./middlewares"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, middlewares_1.default)(app); // bind middlewares
(0, routes_1.default)(app); // initialize all routes
// Base route to health check
app.get("/health", (req, res) => {
    return res.status(200).send("healthy");
});
// Handle invalid Route
app.all("/*", (req, res) => {
    logger_1.logger.info(__filename, "Invalid Route Handler", "No UUID", "Invalid Route Fired : " + req.path, {});
    return res.status(400).json({
        status: 400,
        message: "Bad Request",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map