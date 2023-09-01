import { Card, Flex, TextInput } from "@mantine/core"
import { useState } from "react"
import BuyToken from "../Web3Buttons/BuyToken"
import { calculatePrice, formatInputValue } from "@/utils/methods"

const UserAmount = ({ price, maxBuy }: { price: bigint; maxBuy: bigint }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (value: string) => {
    const newValue = formatInputValue(value, inputValue)
    setInputValue(newValue)
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
          description={calculatePrice(inputValue, price)}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <BuyToken amount={inputValue} maxLimitBut={maxBuy} payment={price} />
      </Flex>
    </Card>
  )
}

export default UserAmount
