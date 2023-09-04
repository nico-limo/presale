import { Progress, Skeleton, Text } from "@mantine/core"
import { useMemo } from "react"
import { formatUnits } from "viem"
import { useContractRead } from "wagmi"
import { ADDRESS } from "@/types/variables"
import token_abi from "@/utils/abis/token.json"
import { TSTK_TOKEN } from "@/utils/constants"
import { contract_presale } from "@/utils/contract"
import { calculatePercentage, formatAmount } from "@/utils/methods"

/**
 * Displays the token amount of a specified address using Wagmi hooks.
 *
 * @param {ADDRESS} address - The Ethereum address for which the token amount will be displayed.
 * @returns {JSX.Element} JSX element displaying the token amount.
 */
const TokenAmount = ({
  address,
  maxWalletBuy,
}: {
  address: ADDRESS
  maxWalletBuy: bigint
}) => {
  // Using the useContractRead hook from Wagmi to read the balanceOf function of the token contract
  const { data, isLoading } = useContractRead({
    address: TSTK_TOKEN.address as ADDRESS,
    abi: token_abi,
    functionName: "balanceOf",
    args: [address],
    watch: true, // This will update the state every X seconds, is similar like a timeoout, that mean it will happend always
  })
  const { data: soldAmount, isLoading: loadingAmount } = useContractRead({
    address: contract_presale.address,
    abi: contract_presale.abi,
    functionName: "currentStageSoldAmount",
    args: [address],
    watch: true, // This will update the state every X seconds, is similar like a timeoout, that mean it will happend always
  })
  const formatBalance = useMemo(() => {
    if (data) return formatUnits(data as bigint, TSTK_TOKEN.decimals)
    return "0"
  }, [data])
  const formatSoldAmountStage = useMemo(() => {
    if (soldAmount) return formatUnits(soldAmount as bigint, 18)
    return "0"
  }, [soldAmount])

  const formatMaxWallet = formatUnits(maxWalletBuy, 18)
  const formatterMaxWallet = formatAmount(formatMaxWallet, "number")
  const formatterBalance = formatAmount(formatBalance, "number")
  const formatterSoldAmountStage = formatAmount(formatSoldAmountStage, "number")
  const percentage = calculatePercentage(formatSoldAmountStage, formatMaxWallet)

  return (
    <Skeleton visible={isLoading && loadingAmount}>
      <Text fz="md" fw={500}>
        {formatterBalance} User Balance
      </Text>
      <Text fz="lg" fw={500}>
        {formatterSoldAmountStage} / {formatterMaxWallet}
      </Text>
      <Progress value={percentage} mt="md" size="lg" radius="xl" />
    </Skeleton>
  )
}

export default TokenAmount
