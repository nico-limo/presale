import { useEffect, useState } from "react"
import { formatUnits } from "viem"
import { useContractReads } from "wagmi"
import { PRESALE } from "@/types/variables"
import { SECONDS_PER_BLOCK, THOUSAND_SEC, zeroBigInt } from "@/utils/constants"
import { contract_presale } from "@/utils/contract"
import { getCurrentBlock } from "@/utils/web3Methods"

const usePresaleContract = () => {
  const [presaleData, setPresaleData] = useState<PRESALE>({
    currentStage: "0",
    availableAmount: "0",
    price: zeroBigInt,
    blockDuration: "0",
    blockStart: "0",
    currentStageBlockStart: "0",
    maxWalletBuy: zeroBigInt,
    timestamp: Number("1") * THOUSAND_SEC,
    maxTokens: "0",
  })
  const { data, isLoading } = useContractReads({
    contracts: [
      {
        ...contract_presale,
        functionName: "STAGE_BLOCKS_DURATION",
      },
      {
        ...contract_presale,
        functionName: "currentStage",
      },
      {
        ...contract_presale,
        functionName: "currentStageAvailableAmount",
      },
      {
        ...contract_presale,
        functionName: "blockStart",
      },
      {
        ...contract_presale,
        functionName: "currentStageBlockStart",
      },
      {
        ...contract_presale,
        functionName: "STAGE_PRICE_INCREMENT",
      },
      {
        ...contract_presale,
        functionName: "UNIT_PRICE",
      },
      {
        ...contract_presale,
        functionName: "STAGE_MAX_WALLET_BUY",
      },
      {
        ...contract_presale,
        functionName: "STAGE_MAX_TOKENS",
      },
    ],
    watch: true,
  })

  useEffect(() => {
    const getPresaleData = async () => {
      if (data) {
        const [
          stageBlockDuration,
          currentStage,
          currentStageAvailableAmount,
          blockStart,
          currentStageBlockStart,
          stagePriceIncrement,
          unitPrice,
          maxWalletBuy,
          maxTokens,
        ] = data.map((f) => f.result) as bigint[]

        const formatAvailableAmount = formatUnits(
          currentStageAvailableAmount,
          18,
        )
        const formatMaxTokens = formatUnits(maxTokens, 18)
        const formatBlockDuration = formatUnits(stageBlockDuration, 0)
        const formatCurrentStage = formatUnits(currentStage, 0)
        const formatBlockStart = formatUnits(blockStart, 0)
        const formatCurrentStageBlockStart = formatUnits(
          currentStageBlockStart,
          0,
        )

        const blockEndStage = currentStage * stageBlockDuration + blockStart
        const currentBlock = await getCurrentBlock()
        const timestamp =
          (blockEndStage - currentBlock.number) * SECONDS_PER_BLOCK

        const price =
          unitPrice + stagePriceIncrement * (currentStage - BigInt(1))
        setPresaleData({
          currentStage: formatCurrentStage,
          availableAmount: formatAvailableAmount,
          price,
          blockDuration: formatBlockDuration,
          blockStart: formatBlockStart,
          currentStageBlockStart: formatCurrentStageBlockStart,
          maxWalletBuy,
          maxTokens: formatMaxTokens,
          timestamp: Number(timestamp) * THOUSAND_SEC,
        })
      }
    }
    getPresaleData()
  }, [data])

  return { presaleData, isLoading }
}

export default usePresaleContract
