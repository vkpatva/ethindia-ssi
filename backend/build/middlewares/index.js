"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
const i18n_1 = require("./i18n");
// import swagger from './swagger'
const uuid_1 = __importDefault(require("./uuid"));
exports.default = (app) => {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ limit: "500mb", extended: true }));
    app.use(i18n_1.i18n.init); // support internationalization
    app.use(underMaintenanceCheck); // check to see if app is under maintenance
    (0, uuid_1.default)(app); // add uuid in req if not available
    // swagger(app) // bind swagger
    // add all other middleware here
};
const underMaintenanceCheck = (req, res, next) => {
    if (process.env.APP_UNDER_MAINTAINANCE === "true") {
        logger_1.logger.info(__filename, "", "", req.__("SERVICE_UNAVAILABLE"));
        res.status(503).json({
            status: 503,
            message: req.__("SERVICE_UNAVAILABLE"),
        });
        return;
    }
    else {
        next();
    }
};
//# sourceMappingURL=index.js.map