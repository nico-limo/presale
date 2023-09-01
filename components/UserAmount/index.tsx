import { Card, Flex, TextInput } from "@mantine/core"
import BuyToken from "../Web3Buttons/BuyToken"
import { limitBuyBigInt } from "@/utils/constants"

const UserAmount = () => {
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
          label="Buy Token"
          description="$23"
        />
        <BuyToken amount={limitBuyBigInt} />
      </Flex>
    </Card>
  )
}

export default UserAmount
