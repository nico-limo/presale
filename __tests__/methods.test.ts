import {
  calculatePrice,
  formatAmount,
  formatInputValue,
  truncateAddress,
} from "@/utils/methods"

describe("truncateAddress", () => {
  it("should truncate the address correctly", () => {
    const address = "0x123456789abcdef123456789abcdef123456789a"
    const truncated = truncateAddress(address)
    expect(truncated).toEqual("0x12...789a")
  })
})

describe("formatAmount function", () => {
  it("should format amount with dollars", () => {
    const amount = "1234567.89"
    const formatted = formatAmount(amount, "price", 2)
    expect(formatted).toBe("$1,234,567.89")
  })

  it("should format amount as percentage", () => {
    const amount = "0.1234"
    const formatted = formatAmount(amount, "percentage")
    expect(formatted).toBe("0.12%")
  })
})

describe("formatInputValue function", () => {
  it("should format input value with decimals", () => {
    const value = "12.3456789"
    const currentValue = "0"
    const formatted = formatInputValue(value, currentValue)
    expect(formatted).toBe("12.3456789")
  })
})

describe("calculatePrice function", () => {
  it("should calculate total price with valid amount and price", () => {
    const amount = "10"
    const price = BigInt("100000000000000000") // 0.1 ETH in wei
    const totalPrice = calculatePrice(amount, price)
    expect(totalPrice).toBe("$1.00000000")
  })

  it("should handle empty amount", () => {
    const amount = ""
    const price = BigInt("100000000000000000")
    const totalPrice = calculatePrice(amount, price)
    expect(totalPrice).toBe("$0.10000000")
  })
})
