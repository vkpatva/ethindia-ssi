"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../components/verifier/index"));
/**
 * Init All routes here
 */
exports.default = (app) => {
    // Public routes
    //Private routes
    app.use("/verify", index_1.default);
};
//# sourceMappingURL=index.js.map