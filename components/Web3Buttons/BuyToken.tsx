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
}: {
  amount: string
  maxLimitBut: bigint
  payment: bigint
}) => {
  const { address, isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const parsedAmount = parseEther(amount)

  const totalPayment = payment * parsedAmount
  const formatPayment = formatUnits(totalPayment, 36)
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
        setIsLoading(false)
      }
    } catch (error) {
      console.log("ERROR ", error)
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
