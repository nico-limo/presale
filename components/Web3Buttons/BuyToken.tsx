import { Button } from "@mantine/core"
import React, { useState } from "react"
import { parseEther } from "viem"
import { useAccount } from "wagmi"
import { zeroBigInt } from "@/utils/constants"
import { buyToken } from "@/utils/web3Methods"

const BuyToken = ({
  amount,
  maxLimitBut,
}: {
  amount: string
  maxLimitBut: bigint
}) => {
  const { address, isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const parseAmount = parseEther(amount)

  const isDisabled = () => {
    if (!isConnected) return true
    if (parseAmount === zeroBigInt) return true
    if (parseAmount > maxLimitBut) return true
    return false
  }

  const onBuy = async () => {
    try {
      setIsLoading(true)
      if (address) {
        const result = await buyToken(address, parseAmount)
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
