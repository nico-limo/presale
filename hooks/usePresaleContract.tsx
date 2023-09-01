import { useEffect, useState } from "react"
import { formatUnits } from "viem"
import { PRESALE } from "@/types/variables"
import { SECONDS_PER_BLOCK, THOUSAND_SEC, zeroBigInt } from "@/utils/constants"
import { getCurrentBlock, getPresaleData } from "@/utils/web3Methods"

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
  const formatCurrentStageBlockStart = formatUnits(currentStageBlockStart, 0)

  const blockEndStage = currentStage * blockDuration + blockStart
  const currentBlock = await getCurrentBlock()
  const timestamp = (blockEndStage - currentBlock.number) * SECONDS_PER_BLOCK

  const price = unitPrice + stagePriceIncrement * (currentStage - BigInt(1)) // Following Smart Contract logic, we go one stage below

  return {
    currentStage: formatCurrentStage,
    availableAmount: formatAvailableAmount,
    price,
    blockDuration: formatBlockDuration,
    blockStart: formatBlockStart,
    currentStageBlockStart: formatCurrentStageBlockStart,
    maxWalletBuy,
    timestamp: Number(timestamp) * THOUSAND_SEC,
  }
}

const usePresaleContract = () => {
  const [data, setData] = useState<PRESALE>({
    currentStage: "0",
    availableAmount: "0",
    price: zeroBigInt,
    blockDuration: "0",
    blockStart: "0",
    currentStageBlockStart: "0",
    maxWalletBuy: zeroBigInt,
    timestamp: null,
  })

  useEffect(() => {
    fetchData().then((newData) => setData(newData))
  }, [])

  // refetch is a controlled update state, here we call this function and it will only happen when we send it
  const refetch = async () => {
    const newData = await fetchData()
    setData(newData)
  }

  return { data, refetch }
}

export default usePresaleContract
