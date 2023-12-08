import { ethers } from 'ethers'
import * as dotenv from 'dotenv'
import { ConsumerJSON } from '../../utils/constants'
import { logger } from '../../utils/logger'

dotenv.config()

const chainlinkConsumerContract = process.env.CONTRACT_ADDRESS as string
const privateKey = process.env.PRIVATE_KEY as string
const rpcURL = process.env.RPC_URL as string

const contractABI = ConsumerJSON
const provider = new ethers.JsonRpcProvider(rpcURL)
const wallet = new ethers.Wallet(privateKey, provider)
const contract = new ethers.Contract(chainlinkConsumerContract, contractABI, wallet)
export async function addSong(songId: string, artistAddress: string) {
	try {
		const transaction = await contract.addSong(songId, artistAddress)
		const receipt = await transaction.wait()
		logger.info(__filename, 'addSong', 'Transaction mined:', receipt)
	} catch (error) {
		console.error('Error adding song', error)
	}
}
