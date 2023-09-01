import { Text, Card } from "@mantine/core"
import dynamic from "next/dynamic"
import { useAccount } from "wagmi"

const TokenAmount = dynamic(() => import("./TokenAmount"), {
  ssr: false,
})

const UserStats = () => {
  const { address } = useAccount()

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
      {address ? (
        <TokenAmount address={address} />
      ) : (
        <Text>Connect Wallet</Text>
      )}
    </Card>
  )
}

export default UserStats
