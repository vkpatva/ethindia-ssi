"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
exports.default = (app) => {
    app.use((req, res, next) => {
        if (req.custom && req.custom.uuid) {
            return next();
        }
        const uuidObj = {
            uuid: (0, uuid_1.default)()
        };
        req.custom = uuidObj;
        next();
    });
};
//# sourceMappingURL=index.js.map