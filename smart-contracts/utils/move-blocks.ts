import { network } from 'hardhat'

export function sleep(timeInMs: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, timeInMs))
}

export async function moveBlocks(amount: number, sleepAmount?: any) {
    console.log('Moving blocks...')

    sleepAmount = sleepAmount ? sleepAmount : 0

    for (let index = 0; index < amount; index++) {
        await network.provider.request({
            method: 'evm_mine',
            params: []
        })
        if (sleepAmount) {
            console.log(`Sleeping for ${sleepAmount}`)
            await sleep(sleepAmount)
        }
    }
    console.log(`Moved ${amount} blocks`)
}
