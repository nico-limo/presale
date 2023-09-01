import { formatUnits, parseUnits } from "viem"
import { DECIMALS, NO_DECIMAL } from "./constants"
import { ADDRESS, AmountType } from "@/types/variables"

const ONLY_NUMBER = /^[0-9]*\.?[0-9]*$/

/**
 * Truncates the given Ethereum address by displaying only the first and last four characters.
 *
 * @param {ADDRESS} address - The Ethereum address to be truncated.
 * @returns {string} The truncated Ethereum address with only the first and last four characters visible.
 */
export const truncateAddress = (address: ADDRESS) =>
  `${address.slice(0, 4)}...${address.slice(-4)}`

/**
 * Calculates the percentage of a number relative to another number.
 *
 * @param {string} value - The value for which the percentage is calculated.
 * @param {string} total - The total value against which the percentage is calculated.
 * @returns {number} The calculated percentage as a number.
 */
export const calculatePercentage = (value: string, total: string): number => {
  const numericValue = parseFloat(value)
  const numericTotal = parseFloat(total)

  if (isNaN(numericValue) || isNaN(numericTotal) || numericTotal === 0) {
    return 0
  }

  const percentage = (numericValue / numericTotal) * 100
  return percentage
}

/**
 * Formats an `amount` as a string with commas for the integer part and a period and `decimals` decimals (if any) for the decimal part.
 * @param {string} amount - The amount to format as a string.
 * @param {AmountType} type - The type of formatting to use ('price' for dollar formatting, 'percentage' for percentage formatting, or anything else for plain formatting).
 * @param {number} [decimals] - The number of decimal places to show in the formatted amount (defaults to 2 if not specified).
 * @returns {string} The formatted `amount` as a string.
 */
export const formatAmount = (
  amount: string,
  type: AmountType,
  decimals?: number,
): string => {
  const decimalSeparator = "."
  const thousandSeparator = ","
  const decimalPartIndex = amount.indexOf(decimalSeparator)

  let integralPart = amount
  let decimalPart = ""

  if (decimalPartIndex !== NO_DECIMAL) {
    integralPart = amount.slice(0, decimalPartIndex)
    decimalPart = amount.slice(decimalPartIndex + 1)
  }

  integralPart = integralPart.replace(
    new RegExp(`\\${thousandSeparator}`, "g"),
    "",
  )

  if (!integralPart.match(/^\d+$/)) {
    return ""
  }

  integralPart = integralPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandSeparator,
  ) // Add commas to integral part

  let formattedAmount = integralPart

  if (decimalPart.length > 0) {
    // Only add decimal part if it's not empty
    formattedAmount +=
      decimalSeparator +
      decimalPart
        .slice(0, decimals || DECIMALS)
        .padEnd(decimals || DECIMALS, "0")
  } else if (decimals && decimals > 0) {
    // Only add decimal part if `decimals` is specified and greater than 0
    formattedAmount += decimalSeparator + "0".repeat(decimals)
  }

  switch (type) {
    case "price":
      formattedAmount = "$" + formattedAmount
      break
    case "percentage":
      formattedAmount += "%"
      break
  }

  return formattedAmount
}

/**
 * Format a numeric string input value to allow only valid number inputs
 * @param {string} value - The numeric string input value to format
 * @param {string} currentValue - The numeric string current value
 * @returns {string} - The formatted input value as a string
 */
export const formatInputValue = (
  value: string,
  currentValue: string,
): string => {
  if (["", "0"].includes(value)) {
    return "0"
  }

  if (value === ".") {
    return "0."
  }

  const match = value.match(ONLY_NUMBER)

  if (match && match[0].length === value.length) {
    let newValue = value
    if (newValue.startsWith("0") && newValue.charAt(1) !== ".") {
      newValue = newValue.replace("0", "")
    }
    const decimalIndex = newValue.indexOf(".")
    if (
      decimalIndex !== -1 &&
      newValue.substring(decimalIndex + 1).length > 18
    ) {
      const lastItem = newValue.charAt(newValue.length - 1)
      newValue = newValue.substring(0, decimalIndex + 18).concat(lastItem)
    }

    return newValue
  }

  return currentValue
}

/**
 * Calculate the total price based on the given amount and price in BigInt.
 *
 * @param {string} amount - The amount to calculate the total price for (in string format).
 * @param {bigint} price - The price per unit (in BigInt format).
 * @returns {string} The total price formatted as a string with the appropriate decimals and symbol.
 */
export const calculatePrice = (amount: string, price: bigint) => {
  if (["", "."].includes(amount) || Number(amount) === 0) {
    const formatPrice = formatUnits(price, 18)
    return formatAmount(formatPrice, "price", 8)
  }
  const amountParsed = parseUnits(amount, 18)

  const result = amountParsed * price
  // Here we add the decimals from the amountParsed + the price decimals
  const formatResult = formatUnits(result, 36)
  return formatAmount(formatResult, "price", 8)
}
