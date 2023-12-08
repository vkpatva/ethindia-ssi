import STATUS_CODES from "http-status-codes"
import { CustomRequest, CustomResponse, Pager } from "../../environment"
import { RECORDS_PER_PAGE } from "../../utils/constants"
import { createResponse, getDefaultSortOrder } from "../../utils/helper"
import { logger } from "../../utils/logger"
// import sequelize from "../../utils/dbConfig"
import { io } from "../../server"
import { auth, resolver, protocol } from "@iden3/js-iden3-auth"
import { humanReadableAuthReason } from "./proofRequests"
import getRawBody from "raw-body"
import path from "path"
const requestMap = new Map()

const STATUS = {
    IN_PROGRESS: "IN_PROGRESS",
    ERROR: "ERROR",
    DONE: "DONE",
}

const socketMessage = (fn: string, status: string, data: any) => ({
    fn,
    status,
    data,
})

const NGROK = `https://edbc-203-129-213-98.ngrok.io`
class VerifyController {
    async authQR(req: CustomRequest, res: CustomResponse) {
        try {
            const sessionId: any = req.query.sessionId

            logger.info(__filename, "authQR", req.custom.uuid, "Authentication QR for:", sessionId)

            io.sockets.emit(sessionId, socketMessage("getAuthQr", STATUS.IN_PROGRESS, sessionId))

            const uri = `${NGROK}/verify/gov-id?sessionId=${sessionId}`

            const request = auth.createAuthorizationRequest(humanReadableAuthReason, process.env.VERIFIER_DID as string, uri)

            request.id = sessionId
            request.thid = sessionId

            const scope = request.body.scope ?? []
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
            }
            request.body.scope = [...scope, newProofReq]

            // store this session's auth request
            requestMap.set(sessionId, request)

            io.sockets.emit(sessionId, socketMessage("getAuthQr", STATUS.DONE, request))

            createResponse(res, STATUS_CODES.OK, "Auth Qr generated successfully", request)
        } catch (error) {
            logger.error(__filename, "authQR", req.custom.uuid, "authQR", error)
            createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, "SERVER_ERROR")
        }
    }
}

export default new VerifyController()
