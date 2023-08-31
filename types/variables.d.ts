export type ADDRESS = `0x${string}`

export interface TOKEN {
  address: ADDRESS | null
  symbol: string
  decimals: number
  name: string
}
