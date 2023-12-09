import { resolve } from 'path'
import { config } from 'dotenv'
import { ethers } from 'ethers'
// config({ path: resolve(__dirname, './../../.env') })
import { abi, nftAbi } from './abi'

class Web3Service {
	public providerRPC = {
		mumbai: {
			name: 'mumbai',
			rpc: process.env.RPC_URL_MUMBAI as string,
			// chainId: 80001 // 0x13881 in hex
			chainId: 31337 // 0x13881 in hex
		},
		polygon: {
			name: 'polygon',
			rpc: process.env.RPC_URL_POLYGON as string,
			// chainId: 137
			chainId: 80001
		}
	}

	public mumbaiProvider = new ethers.JsonRpcProvider(this.providerRPC.mumbai.rpc, {
		chainId: this.providerRPC.mumbai.chainId,
		name: this.providerRPC.mumbai.name
	})

	public polygonProvider = new ethers.JsonRpcProvider(this.providerRPC.polygon.rpc, {
		chainId: this.providerRPC.polygon.chainId,
		name: this.providerRPC.polygon.name
	})

	public mumbaiWallet = new ethers.Wallet(process.env.MUMBAI_PVT as string, this.mumbaiProvider)

	public polygonWallet = new ethers.Wallet(process.env.POLYGON_PVT as string, this.polygonProvider)

	public credEventsContract = new ethers.Contract(process.env.CRED_EVENT as string, abi, this.mumbaiWallet)

	public termNftContract = new ethers.Contract(process.env.TERM_NFT_POLYGON as string, nftAbi, this.polygonWallet)

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

	public async mintTo(address: string) {
		try {
			const tokenId = BigInt(this.generateRandomNumber())

			const txReceipt = await this.termNftContract.safeMint(address, tokenId, process.env.NFT_JSON as string)

			const tx = await txReceipt.wait()
			console.log({ tx })
		} catch (error) {
			console.log(error)
		}
	}

	public generateRandomNumber() {
		const min = 100000000000
		const max = 999999999999

		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

		return randomNumber
	}
}

export default new Web3Service()
