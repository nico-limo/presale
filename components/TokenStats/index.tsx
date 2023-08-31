import { Text, Progress, Card } from "@mantine/core"
import { TSTK_TOKEN } from "@/utils/constants"

const TokenStats = () => {
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
        10 / 10,000
      </Text>
      <Progress value={14.31} mt="md" size="lg" radius="xl" />
    </Card>
  )
}

export default TokenStats
