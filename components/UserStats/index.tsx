import { Text, Card } from "@mantine/core"
import { TSTK_TOKEN } from "@/utils/constants"

const UserStats = () => {
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
        User Total Purchase
      </Text>
      <Text fz="lg" fw={500}>
        100 {TSTK_TOKEN.symbol}
      </Text>
    </Card>
  )
}

export default UserStats
