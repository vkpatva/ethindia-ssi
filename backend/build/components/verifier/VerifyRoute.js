"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VerifyController_1 = __importDefault(require("./VerifyController"));
const router = (0, express_1.Router)();
router.get("/govt-auth-qr", (req, res) => {
    VerifyController_1.default.authQR(req, res);
});
// router.post("/gov-id", (req: Request, res: Response) => {
//     Controller.verifyGovId(req, res)
// })
exports.default = router;
//# sourceMappingURL=VerifyRoute.js.map