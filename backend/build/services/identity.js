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
const got_1 = __importDefault(require("got"));
const config_1 = require("./config");
const host = (0, config_1.HOST)().IDENTITY;
class Identity {
    /**
     * @description Create new user
     * @param {String} body
     */
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.CREATE_USER}`;
                const response = yield (0, got_1.default)(uri, {
                    method: 'POST',
                    json: true,
                    body
                });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Get provider details by email
     * @param {number} appId
     * @param {string} email
     */
    getProviderByEmail(appId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.GET_PROVIDER(appId, email)}`;
                const res = yield (0, got_1.default)(uri, { json: true, method: 'GET' });
                return res.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Replace provider role
     *
     * @param {number} userId
     * @param {number} providerId
     * @param {number} roleId
     */
    replaceProviderRole(userId, providerId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.REPLACE_PROVIDER_ROLE(userId, providerId, roleId)}`;
                const res = yield (0, got_1.default)(uri, { method: 'PUT' });
                return res.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Replace provider role
     *
     * @param {number} userId
     * @param {number} providerId
     * @param {number} roleId
     */
    replaceStudentRole(userId, providerId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.REPLACE_PROVIDER_ROLE(userId, providerId, roleId)}`;
                const res = yield (0, got_1.default)(uri, { method: 'PUT' });
                return res.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Get Student details by contact
     * @param {number} appId
     * @param {number} dialCodeCountryId,
     * @param {number} contact,
     */
    getStudentByContact(appId, dialCodeCountryId, contact) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.GET_STUDENT(appId, dialCodeCountryId, contact)}`;
                const res = yield (0, got_1.default)(uri, { json: true, method: 'GET' });
                return res.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Delete user by id
     * @param {number} userId
     */
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.DELETE_USER(userId)}`;
                const response = yield (0, got_1.default)(uri, {
                    method: 'DELETE',
                    json: true
                });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Authorize user
     * @param token
     */
    authorizeUser(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.AUTHORIZE_USER}`;
                const response = yield (0, got_1.default)(uri, {
                    method: 'GET',
                    json: true,
                    headers: {
                        Authorization: `${token}`
                    }
                });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Verify Provider
     * @param userId
     * @param verify
     */
    verifyProvider(userId, verify) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.VERIFY_PROVIDER(userId, verify)}`;
                const response = yield (0, got_1.default)(uri, { method: 'PUT', json: true });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Verify Student
     * @param userId
     * @param verify
     */
    verifyStudent(userId, verify) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.VERIFY_STUDENT(userId, verify)}`;
                const response = yield (0, got_1.default)(uri, { method: 'PUT', json: true });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Activate User
     * @param userId
     * @param active
     */
    activateUser(userId, active) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.ACTIVATE_USER(userId, active)}`;
                const response = yield (0, got_1.default)(uri, { method: 'PUT', json: true });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Private login
     * @param userId
     */
    privateLogin(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.PRIVATE_LOGIN(userId)}`;
                const response = yield (0, got_1.default)(uri, { method: 'POST', json: true, body: { params: {} } });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description provider login
     * @param body
     */
    providerLogin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.PROVIDER_LOGIN}`;
                const response = yield (0, got_1.default)(uri, { method: 'POST', json: true, body });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description student login
     * @param body
     */
    studentLogin(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.STUDENT_LOGIN}`;
                const response = yield (0, got_1.default)(uri, { method: 'POST', json: true, body });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Reset Password
     * @param {Object} body
     */
    resetPassword(userId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.RESET_PASSWORD(userId)}`;
                // Form Data
                const response = yield (0, got_1.default)(uri, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;'
                    },
                    body: JSON.stringify(body)
                });
                return response;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description logout user
     * @param {String} token
     */
    logout(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.LOGOUT}`;
                const response = yield (0, got_1.default)(uri, { method: 'GET', json: true, headers: { Authorization: `${token}` } });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Generate custom token
     * @param {String} body
     */
    generateCustomToken(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.GENERATE_CUSTOM_TOKEN}`;
                const response = yield (0, got_1.default)(uri, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify(body)
                });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Get all claims from custom token
     * @param {String} token
     * @param {Array} claims
     */
    getAllClaims(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.GET_ALL_CLAIMS}`;
                const response = yield (0, got_1.default)(uri, { method: 'GET', json: true, headers: { Authorization: token } });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Change Password
     * @param {Object} body
     */
    changePassword(authorization, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.CHANGE_PASSWORD}`;
                // Form Data
                const response = yield (0, got_1.default)(uri, {
                    method: 'PUT',
                    headers: {
                        Authorization: authorization,
                        'Content-Type': 'application/json;'
                    },
                    body: JSON.stringify(body)
                });
                return response;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Update Contact
     * @param {Object} body
     */
    updateContact(userId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.UPDATE_CONTACT(userId)}`;
                const response = yield (0, got_1.default)(uri, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;'
                    },
                    body: JSON.stringify(body)
                });
                return response;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description Create bulk user
     * @param {String} body
     */
    createBulkUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.CREATE_BULK_USER}`;
                const response = yield (0, got_1.default)(uri, {
                    method: 'POST',
                    json: true,
                    body
                });
                return response.body;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    /**
     * @description logout all user sesstion
     * @param {String} token
     */
    logoutAll(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `${host}${config_1.IDENTITY.LOGOUT_ALL(userId)}`;
                const response = yield (0, got_1.default)(uri, { method: 'GET', json: true, headers: {} });
                return response.body;
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = new Identity();
//# sourceMappingURL=identity.js.map