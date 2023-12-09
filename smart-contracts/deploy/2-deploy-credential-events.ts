import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { networkConfig, developmentChains } from '../helper-hardhat-config'
import verify from '../utils/verify'
import hre from 'hardhat'

const deployCredentialEvents: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const chainLinkFunctionsRouter_mumbai = '0x6E2dc0F9DB014aE19888F539E59285D2Ea04244C'
    // const claimToken = await hre.ethers.getContract('OstrichDataAssets', deployer)
    const claimToken = '0x6d6bf337a4eab886420860d41ec51de1c31b8d11'

    const args: any = [chainLinkFunctionsRouter_mumbai, claimToken]

    const event = await deploy('CredentialEvents', {
        from: deployer,
        args,
        log: true,
        waitConfirmations: networkConfig[network.name].blockConfirmations || 1
    })

    if (!developmentChains.includes(network.name) && process.env.POLYGONSCAN_API_KEY) {
        await verify(event.address, args)
    }
}

export default deployCredentialEvents
deployCredentialEvents.tags = ['all', 'credential-events']
