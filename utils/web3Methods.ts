import { createPublicClient, createWalletClient, custom, http } from "viem"
import { polygonMumbai } from "viem/chains"
import { RPC_NETWORK, zeroBigInt } from "./constants"
import { contract_presale } from "./contract"
import { ADDRESS } from "@/types/variables"

// Create a public client to interact with the Polygon Mumbai chain using HTTP.
const client = createPublicClient({
  chain: polygonMumbai,
  transport: http(RPC_NETWORK),
})

/**
 * Get presale data from smart contracts with a multicall.
 * @returns An object with presale data.
 */
export const getPresaleData = async () => {
  try {
    const dataResults = await client.multicall({
      contracts: [
        {
          ...contract_presale,
          functionName: "STAGE_BLOCKS_DURATION",
        },
        {
          ...contract_presale,
          functionName: "currentStage",
        },
        {
          ...contract_presale,
          functionName: "currentStageAvailableAmount",
        },
        {
          ...contract_presale,
          functionName: "blockStart",
        },
        {
          ...contract_presale,
          functionName: "currentStageBlockStart",
        },
        {
          ...contract_presale,
          functionName: "STAGE_PRICE_INCREMENT",
        },
        {
          ...contract_presale,
          functionName: "UNIT_PRICE",
        },
        {
          ...contract_presale,
          functionName: "STAGE_MAX_WALLET_BUY",
        },
      ],
    })
    const [
      stageBlockDuration,
      currentStage,
      currentStageAvailableAmount,
      blockStart,
      currentStageBlockStart,
      stagePriceIncrement,
      unitPrice,
      maxWalletBuy,
    ] = dataResults.map((f) => f.result)

    return {
      blockDuration: stageBlockDuration as bigint,
      currentStage: currentStage as bigint,
      availableAmount: currentStageAvailableAmount as bigint,
      blockStart: blockStart as bigint,
      currentStageBlockStart: currentStageBlockStart as bigint,
      stagePriceIncrement: stagePriceIncrement as bigint,
      unitPrice: unitPrice as bigint,
      maxWalletBuy: maxWalletBuy as bigint,
    }
  } catch {
    return {
      blockDuration: zeroBigInt,
      currentStage: zeroBigInt,
      availableAmount: zeroBigInt,
      blockStart: zeroBigInt,
      currentStageBlockStart: zeroBigInt,
      stagePriceIncrement: zeroBigInt,
      unitPrice: zeroBigInt,
      maxWalletBuy: zeroBigInt,
    }
  }
}

/**
 * Perform the token purchase in the presale with a wallet client.
 * @param {ADDRESS} account - The address of the account making the purchase.
 * @returns The transaction hash of the purchase transaction.
 */
export const buyToken = async (account: ADDRESS, amount: bigint) => {
  const walletClient = createWalletClient({
    chain: polygonMumbai,
    transport: custom(window.ethereum),
  })
  const hash = await walletClient.writeContract({
    address: contract_presale.address,
    abi: contract_presale.abi,
    functionName: "tokenSale",
    args: [amount],
    account,
  })
  const transaction = await client.waitForTransactionReceipt({ hash })
  return transaction.transactionHash
}
