import { BlockChain } from './app.blockchain.model'

export interface AppState {
    readonly blockChain: BlockChain[];
}