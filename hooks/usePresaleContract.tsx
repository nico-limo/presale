import { useEffect, useState } from "react"
import { formatUnits } from "viem"
import { PRESALE } from "@/types/variables"
import { getPresaleData } from "@/utils/web3Methods"

const usePresaleContract = () => {
  const [data, setData] = useState<PRESALE>({
    currentStage: "0",
    availableAmount: "0",
    price: "0",
    blockDuration: "0",
    blockStart: "0",
    currentStageBlockStart: "0",
  })

  useEffect(() => {
    const fetchData = async () => {
      const {
        currentStage,
        availableAmount,
        price,
        blockDuration,
        blockStart,
        currentStageBlockStart,
      } = await getPresaleData()

      const formatAvailableAmount = formatUnits(availableAmount, 18)
      const formatBlockDuration = formatUnits(blockDuration, 0)
      const formatCurrentStage = formatUnits(currentStage, 0)
      const formatPrice = formatUnits(price, 18)
      const formatBlockStart = formatUnits(blockStart, 0)
      const formatCurrentStageBlockStart = formatUnits(
        currentStageBlockStart,
        0,
      )

      setData({
        currentStage: formatCurrentStage,
        availableAmount: formatAvailableAmount,
        price: formatPrice,
        blockDuration: formatBlockDuration,
        blockStart: formatBlockStart,
        currentStageBlockStart: formatCurrentStageBlockStart,
      })
    }
    fetchData()
  }, [])

  return data
}

export default usePresaleContract
