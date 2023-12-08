import { NextFunction } from "express"
import STATUS_CODES from "http-status-codes"
import { CustomRequest, CustomResponse } from "../environment"
import { Identity } from "../services"
import { Authorize } from "../services/identityTypes"
import { createResponse } from "../utils/helper"
import { logger } from "../utils/logger"

class Authorization {
    /**
     * @description Route Authorization for status check
     * @param {Object} req
     * @param {Object} res
     * @param {Object} next
     */
    async isAuthorized(req: CustomRequest, res: CustomResponse, next: NextFunction) {
        try {
            const { authorization }: any = req.headers
            if (!authorization) {
                createResponse(res, STATUS_CODES.UNPROCESSABLE_ENTITY, "Authorization Token is required.")
            }
            const response = await Identity.authorizeUser(authorization)
            if (response) {
                req.user = response as Authorize.ResponseObj
                next()
            } else {
                createResponse(res, STATUS_CODES.UNAUTHORIZED, `Unauthorized access`)
            }
        } catch (err: any) {
            if (err.statusCode !== undefined && err.statusMessage !== undefined) {
                logger.error(__filename, "isAuthorized", "", "status Check error", err) // Log
                createResponse(res, err.statusCode, err.body.message)
            } else {
                logger.error(__filename, "isAuthorized", "", "status Check error", err) // Log
                createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, `Server Error`)
            }
        }
    }
}

const middlewareObj = new Authorization()
export default middlewareObj
