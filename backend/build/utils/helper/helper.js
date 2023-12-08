"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.convertToDateFormat = exports.sendEmail = exports.getUTCDate = exports.getStringInitials = exports.stringWithZeroes = exports.generateMeetingToken = exports.getLeadingZero = exports.beautifyKey = exports.uniqString = exports.getHashedString = exports.getDefaultSortOrder = exports.createValidationResponse = exports.createResponse = void 0;
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const uuid_1 = require("uuid");
// import { Notification } from '../../services/';
//import { logger } from '../logger'
const BCRYPT_SALT = process.env.BCRYPT_SALT;
/**
 * @description Create Response
 * @param {Object} res
 * @param {Number} status
 * @param {String} message
 * @param {Object} payload
 * @param {Object} pager
 */
const createResponse = (res, status, message, payload = {}, pager = {}) => {
    const resPager = typeof pager !== "undefined" ? pager : {};
    return res.status(status).json({
        status,
        message,
        payload,
        pager: resPager,
    });
};
exports.createResponse = createResponse;
/**
 * @description Send Validation Response
 * @param {Object} res
 * @param {errors} errors - Errors Object
 *
 * @return {*|Sequelize.json|Promise<any>}
 */
const createValidationResponse = (res, errors) => {
    return (0, exports.createResponse)(res, http_status_codes_1.default.UNPROCESSABLE_ENTITY, errors[Object.keys(errors)[0]], { error: errors[Object.keys(errors)[0]] }, {});
};
exports.createValidationResponse = createValidationResponse;
/**
 * @description Get Default sort Order
 * @param sortOrder
 */
const getDefaultSortOrder = (sortOrder) => {
    const order = sortOrder && ["asc", "desc"].indexOf(sortOrder.toLowerCase()) !== -1 ? (sortOrder.toLowerCase() === "asc" ? "ASC" : "DESC") : "DESC";
    return order;
};
exports.getDefaultSortOrder = getDefaultSortOrder;
/**
 * @description Get Hashed String
 * @param value
 */
const getHashedString = (value) => {
    const hashWithSalt = bcrypt.hashSync(value, BCRYPT_SALT);
    return hashWithSalt;
};
exports.getHashedString = getHashedString;
/**
 * @description Get Uniq String
 */
const uniqString = (uploadedFileExtension) => {
    const newName = `${(0, uuid_1.v4)()}.${uploadedFileExtension}`;
    return newName;
};
exports.uniqString = uniqString;
/**
 * @description To make object key useable
 * @param string
 */
const beautifyKey = (string) => {
    const key = string.toLowerCase().replace(" ", "_");
    return key;
};
exports.beautifyKey = beautifyKey;
/**
 * @description Get Leading Zero if single character
 * @param string
 */
const getLeadingZero = (string) => {
    return ("0" + string).slice(-2);
};
exports.getLeadingZero = getLeadingZero;
/**
 * @description Get Leading Zero if single character
 * @param string
 */
const generateMeetingToken = (meetingObj) => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.JWT_SECRET) {
        return jsonwebtoken_1.default.sign(meetingObj, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY,
        });
    }
    else {
        return false;
    }
});
exports.generateMeetingToken = generateMeetingToken;
/**
 * @description Add leading zero to particular number
 * @param number
 * @param length
 */
const stringWithZeroes = (number, length) => {
    let my_string = "" + number;
    while (my_string.length < length) {
        my_string = "0" + my_string;
    }
    return my_string;
};
exports.stringWithZeroes = stringWithZeroes;
/**
 * @description Get String initials
 * @param string
 */
const getStringInitials = (string) => {
    const init = string.replace(/[^a-zA-Z ]/g, "").slice(0, 2);
    return init;
};
exports.getStringInitials = getStringInitials;
/**
 * @desc: Get UTC date
 * @param dateObj Date object or string
 */
const getUTCDate = (dateObj) => {
    const date = new Date(dateObj);
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
};
exports.getUTCDate = getUTCDate;
/**
 * @description Send Email common function
 * @param {Array} to
 * @param {String} from
 * @param {String} subject
 * @param {String} body
 */
const sendEmail = (to, from, subject, body) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        try {
            const sendEmailObj = {
                to,
                from: from,
                html: true,
                subject: subject,
                text: body,
            };
            console.log(sendEmailObj);
            // const response: any = await Notification.sendEmail(sendEmailObj);
            // resolve(response);
            resolve(true);
        }
        catch (err) {
            reject(err);
        }
    });
});
exports.sendEmail = sendEmail;
/**
 * @description Convert Date object to Office date format YYYY-MM-DD
 * @param date
 */
const convertToDateFormat = (date) => `${date.getFullYear()}-${(0, exports.getLeadingZero)(date.getMonth() + 1)}-${(0, exports.getLeadingZero)(date.getDate())}`; // Date format conversion
exports.convertToDateFormat = convertToDateFormat;
//# sourceMappingURL=helper.js.map