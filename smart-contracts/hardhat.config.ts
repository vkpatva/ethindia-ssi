import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
// import '@nomicfoundation/hardhat-verify'
import 'hardhat-deploy'
import 'dotenv/config'

const POLYGON_MUMBAI_RPC_URL = process.env.POLYGON_MUMBAI_RPC_URL || 'https://eth-goerli.alchemyapi.io/v2/your-api-key'
const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            chainId: 31337,
            allowUnlimitedContractSize: true
        },
        localhost: {
            chainId: 31337,
            allowUnlimitedContractSize: false
        },
        // goerli: {
        //     url: GOERLI_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 5,
        //     saveDeployments: true
        //     // timeout: 300000,
        // },
        mumbai: {
            url: POLYGON_MUMBAI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 80001,
            saveDeployments: true
            // timeout: 300000,
        }
    },
    solidity: {
        compilers: [
            {
                version: '0.8.7'
            },
            {
                version: '0.6.6'
            },
            {
                version: '0.8.20'
            },
            {
                version: '0.8.19'
            }
        ],
        // version: '0.8.17',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    namedAccounts: {
        deployer: {
            default: 0
            // 1: 0, // on mainnet it might take first account as deployer
        }
        // user: {
        //     default: 1,
        // },
    },
    etherscan: {
        apiKey: POLYGONSCAN_API_KEY
    },
    gasReporter: {
        enabled: true,
        currency: 'USD',
        noColors: true
        // outputFile: "gas-report.txt",
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    mocha: {
        timeout: 200000 // 200 seconds max for running tests
    }
}

export default config
