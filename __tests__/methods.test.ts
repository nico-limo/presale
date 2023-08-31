import { truncateAddress } from "@/utils/methods"

describe("truncateAddress", () => {
  it("should truncate the address correctly", () => {
    const address = "0x123456789abcdef123456789abcdef123456789a"
    const truncated = truncateAddress(address)
    expect(truncated).toEqual("0x12...789a")
  })
})
