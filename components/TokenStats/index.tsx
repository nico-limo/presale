import { Text, Progress, Card } from "@mantine/core"
import { useStyles } from "@/styles/mantineStyles"
import { TSTK_TOKEN } from "@/utils/constants"
import { calculatePercentage, formatAmount } from "@/utils/methods"

const TokenStats = ({
  availableAmount,
  maxTokens,
}: {
  availableAmount: string
  maxTokens: string
}) => {
  const { classes } = useStyles()
  const percentage = calculatePercentage(availableAmount, maxTokens)
  const formatAvailable = formatAmount(availableAmount, "number")
  const formatTotal = formatAmount(maxTokens, "number")
  return (
    <Card withBorder radius="md" className={classes.cardContainer}>
      <Text fz="xs" tt="uppercase" w="100%" fw={700} c="dimmed">
        {`Remaining ${TSTK_TOKEN.symbol} available`}
      </Text>
      <Text fz="lg" fw={500} w="100%">
        {formatAvailable} / {formatTotal}
      </Text>
      <Progress value={percentage} mt="md" size="lg" radius="xl" w="100%" />
    </Card>
  )
}

export default TokenStats
