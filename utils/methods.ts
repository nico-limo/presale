import { ADDRESS } from "@/types/variables"

/**
 * Truncates the given Ethereum address by displaying only the first and last four characters.
 *
 * @param {ADDRESS} address - The Ethereum address to be truncated.
 * @returns {string} The truncated Ethereum address with only the first and last four characters visible.
 */
export const truncateAddress = (address: ADDRESS) =>
  `${address.slice(0, 4)}...${address.slice(-4)}`
