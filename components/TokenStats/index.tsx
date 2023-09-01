import { Text, Progress, Card } from "@mantine/core"
import { TOTAL_PER_STAGE, TSTK_TOKEN } from "@/utils/constants"
import { calculatePercentage, formatAmount } from "@/utils/methods"

const TokenStats = ({
  availableAmount,
  price,
}: {
  availableAmount: string
  price: string
}) => {
  const percentage = calculatePercentage(availableAmount, TOTAL_PER_STAGE)
  const formatAvailable = formatAmount(availableAmount, "number")
  const formatTotal = formatAmount(TOTAL_PER_STAGE, "number")
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
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Remaining {TSTK_TOKEN.symbol} available
      </Text>
      <Text fz="lg" fw={500}>
        {formatAvailable} / {formatTotal}
      </Text>
      <Progress value={percentage} mt="md" size="lg" radius="xl" />
    </Card>
  )
}

export default TokenStats
