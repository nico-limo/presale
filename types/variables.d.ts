export type ADDRESS = `0x${string}`
export type AmountType = "price" | "percentage" | "number"

export interface TOKEN {
  address: ADDRESS | null
  symbol: string
  decimals: number
  name: string
}

export interface PRESALE {
  currentStage: string
  availableAmount: string
  price: bigint
  blockDuration: string
  blockStart: string
  currentStageBlockStart: string
  maxWalletBuy: bigint
  timestamp: number | null
}
