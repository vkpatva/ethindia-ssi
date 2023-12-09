import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { networkConfig, developmentChains } from '../helper-hardhat-config'
import verify from '../utils/verify'
import hre from 'hardhat'

const deployTermNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const args: any = [deployer]

    const event = await deploy('TermNFT', {
        from: deployer,
        args,
        log: true,
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1
    })

    if (!developmentChains.includes(network.name) && process.env.POLYGONSCAN_API_KEY) {
        await verify(event.address, args)
    }
}

export default deployTermNFT
deployTermNFT.tags = ['all', 'term-nft']
