export interface networkConfigItem {
    name?: string
    blockConfirmations?: number
    chainId?: number
}

export interface networkConfigInfo {
    [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    31337: {
        name: 'localhost',
        blockConfirmations: 1
    },
    5: {
        name: 'goerli',
        blockConfirmations: 3
    },
    80001: {
        name: 'mumbai',
        blockConfirmations: 3
    },
    localhost: {
        chainId: 31337
    },
    hardhat: {
        chainId: 31337
    },
    goerli: {
        chainId: 5
    },
    mumbai: {
        chainId: 80001
    }
}

export const developmentChains = ['hardhat', 'localhost']
