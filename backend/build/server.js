"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const http_1 = require("http");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const logger_1 = require("./utils/logger");
/**
 * Load Env
 */
(0, dotenv_1.config)({
    path: (0, path_1.resolve)(__dirname, "../.env"),
});
/**
 * Load App
 */
const app_1 = __importDefault(require("./app"));
const dbConfig_1 = __importDefault(require("./utils/dbConfig"));
const socket_io_1 = require("socket.io");
const server = (0, http_1.createServer)(app_1.default);
const port = Number(process.env.PORT) || 3000;
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
    },
});
exports.io = io;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbConfig_1.default.authenticate();
        // await sequelize.sync({ force: true })
        yield dbConfig_1.default.sync();
        logger_1.logger.info(__filename, "", "", `DB Connection has been established successfully`, ``);
        server.listen(port, () => {
            logger_1.logger.info(__filename, "", "", `Server is running on ${port}`, ``);
        });
        // server.timeout = 18000000;
    }
    catch (err) {
        logger_1.logger.error(__filename, "", "", `Unable to connect to the server`, err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=server.js.map