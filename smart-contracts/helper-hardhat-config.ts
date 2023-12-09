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
        blockConfirmations: 5
    },
    137: {
        name: 'polygon',
        blockConfirmations: 5
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
    },
    polygon: {
        chainId: 137
    }
}

export const developmentChains = ['hardhat', 'localhost']
