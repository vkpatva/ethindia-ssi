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
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const helper_1 = require("../../utils/helper");
const logger_1 = require("../../utils/logger");
// import sequelize from "../../utils/dbConfig"
const server_1 = require("../../server");
const js_iden3_auth_1 = require("@iden3/js-iden3-auth");
const proofRequests_1 = require("./proofRequests");
const requestMap = new Map();
const STATUS = {
    IN_PROGRESS: "IN_PROGRESS",
    ERROR: "ERROR",
    DONE: "DONE",
};
const socketMessage = (fn, status, data) => ({
    fn,
    status,
    data,
});
const NGROK = `https://edbc-203-129-213-98.ngrok.io`;
class VerifyController {
    authQR(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sessionId = req.query.sessionId;
                logger_1.logger.info(__filename, "authQR", req.custom.uuid, "Authentication QR for:", sessionId);
                server_1.io.sockets.emit(sessionId, socketMessage("getAuthQr", STATUS.IN_PROGRESS, sessionId));
                const uri = `${NGROK}/verify/gov-id?sessionId=${sessionId}`;
                const request = js_iden3_auth_1.auth.createAuthorizationRequest(proofRequests_1.humanReadableAuthReason, process.env.VERIFIER_DID, uri);
                request.id = sessionId;
                request.thid = sessionId;
                const scope = (_a = request.body.scope) !== null && _a !== void 0 ? _a : [];
                const newProofReq = {
                    circuitId: "credentialAtomicQuerySigV2",
                    id: 1701589542,
                    query: {
                        allowedIssuers: ["*"],
                        context: "ipfs://QmRksJWDuy8ViCHt6tnn3Yhb562SooUEgazM5oWgCx4ncC",
                        credentialSubject: {
                            DOB: {
                                $lt: 20010100,
                            },
                        },
                        type: "NationalCard",
                    },
                };
                request.body.scope = [...scope, newProofReq];
                // store this session's auth request
                requestMap.set(sessionId, request);
                server_1.io.sockets.emit(sessionId, socketMessage("getAuthQr", STATUS.DONE, request));
                (0, helper_1.createResponse)(res, http_status_codes_1.default.OK, "Auth Qr generated successfully", request);
            }
            catch (error) {
                logger_1.logger.error(__filename, "authQR", req.custom.uuid, "authQR", error);
                (0, helper_1.createResponse)(res, http_status_codes_1.default.INTERNAL_SERVER_ERROR, "SERVER_ERROR");
            }
        });
    }
}
exports.default = new VerifyController();
//# sourceMappingURL=VerifyController.js.map