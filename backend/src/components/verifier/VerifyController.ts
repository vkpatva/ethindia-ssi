import STATUS_CODES from 'http-status-codes'
import { CustomRequest, CustomResponse, Pager } from '../../environment'
import { createResponse } from '../../utils/helper'
import { logger } from '../../utils/logger'
import { io } from '../../server'
import { auth, resolver, protocol } from '@iden3/js-iden3-auth'
import getRawBody from 'raw-body'
import path from 'path'
import { VerifyOpts } from '@iden3/js-iden3-auth/dist/types/circuits/registry'

const requestMap = new Map()

const STATUS = {
	IN_PROGRESS: 'IN_PROGRESS',
	ERROR: 'ERROR',
	DONE: 'DONE'
}
const humanReadableAuthReason = 'Must have a National ID Card'
const socketMessage = (fn: string, status: string, data: any) => ({
	fn,
	status,
	data
})

const NGROK = process.env.NGROK_URL as string
class VerifyController {
	async authQR(req: CustomRequest, res: CustomResponse) {
		try {
			const sessionId: any = req.query.sessionId

			logger.info(__filename, 'authQR', req.custom.uuid, 'Authentication QR for:', sessionId)

			io.sockets.emit(sessionId, socketMessage('getAuthQr', STATUS.IN_PROGRESS, sessionId))

			const uri = `${NGROK}/verify/gov-id?sessionId=${sessionId}`

			const request = auth.createAuthorizationRequest(humanReadableAuthReason, process.env.VERIFIER_DID as string, uri)

			request.id = sessionId
			request.thid = sessionId

			const scope = request.body.scope ?? []
			const newProofReq = {
				circuitId: 'credentialAtomicQuerySigV2',
				id: 1701589542,
				query: {
					allowedIssuers: ['*'],
					context: 'ipfs://QmdnkqbSkLBtqq3dDxxhbBAkfc7HgaWQ7eUpTuQBSHX13h',
					skipClaimRevocationCheck: true,
					credentialSubject: {
						DOB: {
							$lt: 20010101
						}
					},
					type: 'NationalCard'
				}
			}
			request.body.scope = [...scope, newProofReq]

			// store this session's auth request
			requestMap.set(sessionId, request)

			io.sockets.emit(sessionId, socketMessage('getAuthQr', STATUS.DONE, request))

			createResponse(res, STATUS_CODES.OK, 'Auth Qr generated successfully', request)
		} catch (error) {
			logger.error(__filename, 'authQR', req.custom.uuid, 'authQR', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, 'SERVER_ERROR')
		}
	}

	async verifyGovId(req: CustomRequest, res: CustomResponse) {
		try {
			const sessionId = req.query.sessionId as string

			// get this session's auth request for verification
			const authRequest = requestMap.get(sessionId)

			logger.info(__filename, 'verify govt-id', req.custom.uuid, 'Handle Verification for:', sessionId)
	
			io.sockets.emit(sessionId, socketMessage('handleVerification', STATUS.IN_PROGRESS, authRequest))

			// get JWZ token params from the post request
			const raw = await getRawBody(req)
			const tokenStr = raw.toString().trim()
			// https://0xpolygonid.github.io/tutorials/contracts/overview/#blockchain-addresses
			const amoyContractAddress = '0x1a4cC30f2aA0377b0c3bc9848766D90cb4404124'
			const keyDIR = '../../../keys'

			const ethStateResolver = new resolver.EthStateResolver(process.env.RPC_URL_AMOY as string, amoyContractAddress)

			const resolvers = {
				['polygon:amoy']: ethStateResolver
			}

	
			const verifier = await auth.Verifier.newVerifier({
				stateResolver: resolvers,
				circuitsDir: path.join(__dirname, keyDIR),
				ipfsGatewayURL: 'https://ipfs.io'
			})
			// Locate the directory that contains circuit's verification keys
			try {
	
				const opts = {
					AcceptedStateTransitionDelay: 5 * 60 * 1000, // 5 minute
				};
				const authResponse = await verifier.fullVerify(tokenStr, authRequest, opts as VerifyOpts);
				const userID = authResponse.from
				// const opts: any = {
				// 	AcceptedStateTransitionDelay: 5 * 60 * 1000 // up to a 5 minute delay accepted by the Verifier
				// }
				// const authResponse = await verifier.fullVerify(tokenStr, authRequest, opts)
				// const userId = authResponse.from
				io.sockets.emit(sessionId, socketMessage('handleVerification', STATUS.DONE, authResponse))

				createResponse(res, STATUS_CODES.OK, res.__('Gov ID VC Verified Successfully: '), { userID })
			} catch (error) {
				console.log('handleVerification error', sessionId, error)
				io.sockets.emit(sessionId, socketMessage('handleVerification', STATUS.ERROR, error))
				return res.status(500).send(error)
			}
		} catch (error) {
			logger.error(__filename, 'projectList', req.custom.uuid, 'projectList', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR'))
		}
	}

	async insuranceIssueAuthQR(req: CustomRequest, res: CustomResponse) {
		try {
			const sessionId: any = req.query.sessionId

			logger.info(__filename, 'insuranceIssueAuthQR', req.custom.uuid, 'Authentication QR for:', sessionId)

			io.sockets.emit(sessionId, socketMessage('getInsuranceIssueAuthQR', STATUS.IN_PROGRESS, sessionId))

			const uri = `${NGROK}/verify/insurance-issue?sessionId=${sessionId}`

			const request = auth.createAuthorizationRequest(humanReadableAuthReason, process.env.VERIFIER_DID as string, uri)

			request.id = sessionId
			request.thid = sessionId

			const scope = request.body.scope ?? []
			const empProofReq = {
				circuitId: 'credentialAtomicQuerySigV2',
				id: 1701586714,
				query: {
					allowedIssuers: ['*'],
					context: 'ipfs://QmU247Zpw6JBdEU9sHBuAwrUECc7GfTxX4mVmBiy4QtZHU',
					credentialSubject: {
						salary: {
							$gt: 400000
						}
					},
					type: 'EmploymentSchema'
				}
			}
			const labProofReq = {
				circuitId: 'credentialAtomicQuerySigV2',
				id: 1701835417,
				query: {
					allowedIssuers: ['*'],
					context: 'ipfs://QmSsNwmQQyKsCyHGHXHz3kAMayKfMfM9EFtLgqU9piZb9S',
					credentialSubject: {
						bmi: {
							$lt: 2500
						}
					},
					type: 'LabSchema'
				}
			}
			request.body.scope = [...scope, empProofReq, labProofReq]

			// store this session's auth request
			requestMap.set(sessionId, request)

			io.sockets.emit(sessionId, socketMessage('getInsuranceIssueAuthQR', STATUS.DONE, request))

			createResponse(res, STATUS_CODES.OK, res.__('Auth Qr generated successfully'), request)
		} catch (error) {
			logger.error(__filename, 'insuranceIssueAuthQR', req.custom.uuid, 'insuranceIssueAuthQR', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR'))
		}
	}

	async verifyInsuranceIssue(req: CustomRequest, res: CustomResponse) {
		try {
			const sessionId = req.query.sessionId as string

			// get this session's auth request for verification
			const authRequest = requestMap.get(sessionId)

			logger.info(__filename, 'verify insurance-issue', req.custom.uuid, 'Handle Verification for:', sessionId)

			io.sockets.emit(sessionId, socketMessage('handleVerification', STATUS.IN_PROGRESS, authRequest))

			// get JWZ token params from the post request
			const raw = await getRawBody(req)
			const tokenStr = raw.toString().trim()

			// The CredentialAtomicQuerySigValidator contract is used to verify any credential-related zk proof
			// generated by the user using the credentialAtomicQuerySigV2OnChain circuit.
			// https://0xpolygonid.github.io/tutorials/contracts/overview/#blockchain-addresses
			const mumbaiContractAddress = '0x134B1BE34911E39A8397ec6289782989729807a4'
			const keyDIR = '../../../keys'

			const ethStateResolver = new resolver.EthStateResolver(process.env.RPC_URL_MUMBAI as string, mumbaiContractAddress)

			const resolvers = {
				['polygon:amoy']: ethStateResolver
			}

			const verifier = await auth.Verifier.newVerifier({
				stateResolver: resolvers,
				circuitsDir: path.join(__dirname, keyDIR),
				ipfsGatewayURL: 'https://ipfs.io'
			})
			// Locate the directory that contains circuit's verification keys
			try {
				const opts: any = {
					AcceptedStateTransitionDelay: 5 * 60 * 1000 // up to a 5 minute delay accepted by the Verifier
				}
				const authResponse = await verifier.fullVerify(tokenStr, authRequest, opts)
				const userId = authResponse.from
				io.sockets.emit(sessionId, socketMessage('handleVerification', STATUS.DONE, authResponse))

				createResponse(res, STATUS_CODES.OK, res.__('Gov ID VC Verified Successfully: '), { userId })
			} catch (error) {
				console.log('handleVerification error', sessionId, error)
				io.sockets.emit(sessionId, socketMessage('handleVerification', STATUS.ERROR, error))
				return res.status(500).send(error)
			}
		} catch (error) {
			logger.error(__filename, 'projectList', req.custom.uuid, 'projectList', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR'))
		}
	}
}

export default new VerifyController()
