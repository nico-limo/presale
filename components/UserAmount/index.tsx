import { Card, Flex, TextInput } from "@mantine/core"
import { useState } from "react"
import { formatUnits, parseUnits } from "viem"
import BuyToken from "../Web3Buttons/BuyToken"
import { formatAmount, formatInputValue } from "@/utils/methods"

const UserAmount = ({ price, maxBuy }: { price: bigint; maxBuy: bigint }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (value: string) => {
    const newValue = formatInputValue(value, inputValue)
    setInputValue(newValue)
  }

  const calculatePrice = (amount: string) => {
    if (["", "0", "0."].includes(amount)) {
      const formatPrice = formatUnits(price, 18)
      return formatAmount(formatPrice, "price", 18)
    }
    const amountParsed = parseUnits(amount, 18)

    const result = amountParsed * price
    // Here we add the decimals from the amountParsed + the price decimals
    const formatResult = formatUnits(result, 36)
    return formatAmount(formatResult, "price", 18)
  }
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      h="100%"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Flex direction="column" gap={20}>
        <TextInput
          placeholder="Amount to buy"
          value={inputValue}
          label="Buy Token"
          description={calculatePrice(inputValue)}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <BuyToken amount={inputValue} maxLimitBut={maxBuy} />
      </Flex>
    </Card>
  )
}

export default UserAmount
