import * as bcrypt from "bcrypt"
import { Response } from "express"
import jwt from "jsonwebtoken"
import STATUS_CODES from "http-status-codes"
import { v4 } from "uuid"
// import { Notification } from '../../services/';
//import { logger } from '../logger'
const BCRYPT_SALT: any = process.env.BCRYPT_SALT

/**
 * @description Create Response
 * @param {Object} res
 * @param {Number} status
 * @param {String} message
 * @param {Object} payload
 * @param {Object} pager
 */
export const createResponse = (res: Response, status: number, message: string, payload: object | null = {}, pager: object | null = {}) => {
    const resPager = typeof pager !== "undefined" ? pager : {}

    return res.status(status).json({
        status,
        message,
        payload,
        pager: resPager,
    })
}

/**
 * @description Send Validation Response
 * @param {Object} res
 * @param {errors} errors - Errors Object
 *
 * @return {*|Sequelize.json|Promise<any>}
 */
export const createValidationResponse = (res: Response, errors: any) => {
    return createResponse(res, STATUS_CODES.UNPROCESSABLE_ENTITY, errors[Object.keys(errors)[0]], { error: errors[Object.keys(errors)[0]] }, {})
}

/**
 * @description Get Default sort Order
 * @param sortOrder
 */
export const getDefaultSortOrder = (sortOrder: string): string => {
    const order: string =
        sortOrder && ["asc", "desc"].indexOf(sortOrder.toLowerCase()) !== -1 ? (sortOrder.toLowerCase() === "asc" ? "ASC" : "DESC") : "DESC"
    return order
}

/**
 * @description Get Hashed String
 * @param value
 */
export const getHashedString = (value: string): string => {
    const hashWithSalt = bcrypt.hashSync(value, BCRYPT_SALT)
    return hashWithSalt
}

/**
 * @description Get Uniq String
 */
export const uniqString = (uploadedFileExtension: any) => {
    const newName: any = `${v4()}.${uploadedFileExtension}`
    return newName
}

/**
 * @description To make object key useable
 * @param string
 */
export const beautifyKey = (string: string): string => {
    const key: string = string.toLowerCase().replace(" ", "_")
    return key
}

/**
 * @description Get Leading Zero if single character
 * @param string
 */
export const getLeadingZero = (string: string | number): string => {
    return ("0" + string).slice(-2)
}

/**
 * @description Get Leading Zero if single character
 * @param string
 */
export const generateMeetingToken = async (meetingObj: any) => {
    if (process.env.JWT_SECRET) {
        return jwt.sign(meetingObj, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY,
        })
    } else {
        return false
    }
}

/**
 * @description Add leading zero to particular number
 * @param number
 * @param length
 */
export const stringWithZeroes = (number: number, length: number) => {
    let my_string = "" + number
    while (my_string.length < length) {
        my_string = "0" + my_string
    }
    return my_string
}

/**
 * @description Get String initials
 * @param string
 */
export const getStringInitials = (string: string): string => {
    const init: any = string.replace(/[^a-zA-Z ]/g, "").slice(0, 2)
    return init
}

/**
 * @desc: Get UTC date
 * @param dateObj Date object or string
 */
export const getUTCDate = (dateObj: Date): Date => {
    const date = new Date(dateObj)
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
}

/**
 * @description Send Email common function
 * @param {Array} to
 * @param {String} from
 * @param {String} subject
 * @param {String} body
 */
export const sendEmail = async (to: string[], from: string, subject: string, body: string) => {
    return new Promise((resolve, reject) => {
        try {
            const sendEmailObj: any = {
                to,
                from: from,
                html: true,
                subject: subject,
                text: body,
            }

            console.log(sendEmailObj)
            // const response: any = await Notification.sendEmail(sendEmailObj);
            // resolve(response);
            resolve(true)
        } catch (err) {
            reject(err)
        }
    })
}

/**
 * @description Convert Date object to Office date format YYYY-MM-DD
 * @param date
 */
export const convertToDateFormat = (date: Date) => `${date.getFullYear()}-${getLeadingZero(date.getMonth() + 1)}-${getLeadingZero(date.getDate())}` // Date format conversion
