import { Card, Flex, TextInput } from "@mantine/core"
import { useState } from "react"
import BuyToken from "../Web3Buttons/BuyToken"
import { useStyles } from "@/styles/mantineStyles"
import { calculatePrice, formatInputValue } from "@/utils/methods"

const UserAmount = ({ price, maxBuy }: { price: bigint; maxBuy: bigint }) => {
  const [inputValue, setInputValue] = useState("")
  const { classes } = useStyles()
  const handleInputChange = (value: string) => {
    const newValue = formatInputValue(value, inputValue)
    setInputValue(newValue)
  }

  return (
    <Card withBorder radius="md" className={classes.cardContainer}>
      <Flex direction="column" w="100%" gap={20}>
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
