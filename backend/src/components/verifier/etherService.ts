import { resolve } from 'path'
import { config } from 'dotenv'
import { ethers } from 'ethers'
// config({ path: resolve(__dirname, './../../.env') })
import { abi } from './abi'

class Web3Service {
	public providerRPC = {
		mumbai: {
			name: 'mumbai',
			rpc: process.env.RPC_URL_MUMBAI as string,
			// chainId: 80001 // 0x13881 in hex
			chainId: 31337 // 0x13881 in hex
		}
	}

	public mumbaiProvider = new ethers.JsonRpcProvider(this.providerRPC.mumbai.rpc, {
		chainId: this.providerRPC.mumbai.chainId,
		name: this.providerRPC.mumbai.name
	})

	public mumbaiWallet = new ethers.Wallet(process.env.MUMBAI_PVT as string, this.mumbaiProvider)

	public credEventsContract = new ethers.Contract(process.env.CRED_EVENT as string, abi, this.mumbaiWallet)

	public insuranceContract = new ethers.Contract(process.env.CRED_EVENT as string, abi, this.mumbaiWallet)

	public async whiteList(address: string) {
		const call = await this.credEventsContract.whitelistedAddresses(address)
		console.log(`calling whitelistedAddresses for address${address}`, { call })

		if (!call) {
			const txReceipt = await this.credEventsContract.addWhitelistedAddress(address)
			const tx = await txReceipt.wait()
			console.log({ tx })
		} else {
			return 'already whitelisted'
		}

		const call2 = await this.credEventsContract.whitelistedAddresses(address)
		console.log(`whiteliste address${address}, status after tx`, { call2 })

		return 'whitelisted'
	}

	public async mint(address: string) {
		const txReceipt = await this.credEventsContract.mint(address)
		const tx = await txReceipt.wait()
		console.log({ tx })
	}

	public generateRandomNumber() {
		const min = 100000000000
		const max = 999999999999

		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

		return randomNumber
	}
}

export default new Web3Service()
