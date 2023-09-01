import { Button } from "@mantine/core"
import React, { useState } from "react"
import { formatUnits, parseEther } from "viem"
import { useAccount } from "wagmi"
import { zeroBigInt } from "@/utils/constants"
import { buyToken } from "@/utils/web3Methods"

const BuyToken = ({
  amount,
  maxLimitBut,
  payment,
  refetch,
}: {
  amount: string
  maxLimitBut: bigint
  payment: bigint
  refetch: () => Promise<void>
}) => {
  const { address, isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const parsedAmount = parseEther(amount)

  console.log("payment ", payment)
  console.log("parsedAmount ", parsedAmount)
  const totalPayment = payment * parsedAmount
  const formatPayment = formatUnits(totalPayment, 36) // Here the decimals are added when you multiply a value
  const parsedPament = parseEther(formatPayment)

  const isDisabled = () => {
    if (!isConnected) return true
    if (parsedAmount === zeroBigInt) return true
    if (parsedAmount > maxLimitBut) return true
    return false
  }

  const onBuy = async () => {
    try {
      setIsLoading(true)
      if (address) {
        const result = await buyToken(address, parsedAmount, parsedPament)
        console.log("result ", result)
        await refetch()
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
