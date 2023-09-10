import { createPublicClient, http } from "viem"
import { polygonMumbai } from "viem/chains"
import { RPC_NETWORK } from "./constants"

// Create a public client to interact with the Polygon Mumbai chain using HTTP.
const client = createPublicClient({
  chain: polygonMumbai,
  transport: http(RPC_NETWORK),
})

export const getCurrentBlock = () => client.getBlock()
