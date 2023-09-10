import { Button, Text } from "@mantine/core"
import React from "react"
import { formatUnits, parseEther } from "viem"
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi"
import { zeroBigInt } from "@/utils/constants"
import { contract_presale } from "@/utils/contract"

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
  const parsedAmount = parseEther(amount)

  const totalPayment = payment * parsedAmount
  const formatPayment = formatUnits(totalPayment, 36) // Here the decimals are added when you multiply a value
  const parsedPament = parseEther(formatPayment)

  // Check if the wallet action is ready or with erros
  const { config, error, isError } = usePrepareContractWrite({
    address: contract_presale.address,
    abi: contract_presale.abi,
    functionName: "tokenSale",
    account: address,
    value: parsedPament,
    args: [parsedAmount],
  })

  // Check if the wallet action is ready or with erros
  const { data, write, isLoading: isLoadingWrite } = useContractWrite(config)

  const { isLoading: isLoadingTx } = useWaitForTransaction({
    hash: data?.hash,
  })

  const isDisabled = () => {
    if (!isConnected) return true
    if (parsedAmount === zeroBigInt) return true
    if (parsedAmount > maxLimitBut) return true
    if (isError) return true
    return false
  }

  return (
    <>
      <Button
        disabled={isDisabled()}
        onClick={() => write && write()}
        loading={isLoadingWrite || isLoadingTx}
        size="xs"
      >
        Buy Token
      </Button>
      {isError && error && (
        <Text color="red" truncate>
          Error: {error?.message}
        </Text>
      )}
    </>
  )
}

export default BuyToken
