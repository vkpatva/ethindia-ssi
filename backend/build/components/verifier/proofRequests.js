"use strict";
// import { KYCAgeCredential } from './vcHelpers/KYCAgeCredential'
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadableAuthReason = void 0;
// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/
const humanReadableAuthReason = "Must have a National ID Card";
exports.humanReadableAuthReason = humanReadableAuthReason;
const credentialSubject = {
    birthday: {
        // users must be born before this year
        // birthday is less than Jan 1, 2023
        $lt: 20230101,
    },
};
//# sourceMappingURL=proofRequests.js.map