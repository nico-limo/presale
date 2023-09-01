import { Button } from "@mantine/core"
import React, { useState } from "react"
import { useAccount } from "wagmi"
import { limitBuyBigInt } from "@/utils/constants"
import { buyToken } from "@/utils/web3Methods"

const BuyToken = ({ amount }: { amount: bigint }) => {
  const { address, isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const isDisabled = () => {
    if (isConnected) return false
    if (amount < limitBuyBigInt) return false
    return true
  }

  const onBuy = async () => {
    try {
      setIsLoading(true)
      if (address) {
        const result = await buyToken(address)
        console.log("result ", result)
        setIsLoading(false)
      }
    } catch {
      setIsLoading(false)
    }
  }
  return (
    <Button
      disabled={isDisabled()}
      onClick={onBuy}
      loading={isLoading}
      size="xs"
    >
      Buy Token
    </Button>
  )
}

export default BuyToken
