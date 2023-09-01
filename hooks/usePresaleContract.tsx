import { useEffect, useState } from "react"
import { formatUnits } from "viem"
import { PRESALE } from "@/types/variables"
import { zeroBigInt } from "@/utils/constants"
import { getPresaleData } from "@/utils/web3Methods"

const usePresaleContract = () => {
  const [data, setData] = useState<PRESALE>({
    currentStage: "0",
    availableAmount: "0",
    price: zeroBigInt,
    blockDuration: "0",
    blockStart: "0",
    currentStageBlockStart: "0",
    maxWalletBuy: zeroBigInt,
  })

  useEffect(() => {
    const fetchData = async () => {
      const {
        currentStage,
        availableAmount,
        blockDuration,
        blockStart,
        currentStageBlockStart,
        stagePriceIncrement,
        unitPrice,
        maxWalletBuy,
      } = await getPresaleData()

      const formatAvailableAmount = formatUnits(availableAmount, 18)
      const formatBlockDuration = formatUnits(blockDuration, 0)
      const formatCurrentStage = formatUnits(currentStage, 0)
      const formatBlockStart = formatUnits(blockStart, 0)
      const formatCurrentStageBlockStart = formatUnits(
        currentStageBlockStart,
        0,
      )

      const price = unitPrice + stagePriceIncrement * (currentStage - BigInt(1))

      setData({
        currentStage: formatCurrentStage,
        availableAmount: formatAvailableAmount,
        price,
        blockDuration: formatBlockDuration,
        blockStart: formatBlockStart,
        currentStageBlockStart: formatCurrentStageBlockStart,
        maxWalletBuy,
      })
    }
    fetchData()
  }, [])

  return data
}

export default usePresaleContract
