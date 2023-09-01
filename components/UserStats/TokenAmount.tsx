import { Skeleton, Text } from "@mantine/core"
import { formatUnits } from "viem"
import { useContractRead } from "wagmi"
import { ADDRESS } from "@/types/variables"
import token_abi from "@/utils/abis/token.json"
import { TSTK_TOKEN } from "@/utils/constants"

/**
 * Displays the token amount of a specified address using Wagmi hooks.
 *
 * @param {ADDRESS} address - The Ethereum address for which the token amount will be displayed.
 * @returns {JSX.Element} JSX element displaying the token amount.
 */
const TokenAmount = ({ address }: { address: ADDRESS | undefined }) => {
  // Using the useContractRead hook from Wagmi to read the balanceOf function of the token contract
  const { data, isLoading } = useContractRead({
    address: TSTK_TOKEN.address as ADDRESS,
    abi: token_abi,
    functionName: "balanceOf",
    args: [address],
    watch: true, // This will update the state every X seconds, is similar like a timeoout, that mean it will happend always
  })

  if (isLoading) return <Skeleton />

  const formatAmount = formatUnits(data as bigint, TSTK_TOKEN.decimals)

  return (
    <Text fz="lg" fw={500}>
      {formatAmount} {TSTK_TOKEN.symbol}
    </Text>
  )
}

export default TokenAmount
