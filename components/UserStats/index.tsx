import { Text, Card } from "@mantine/core"
import dynamic from "next/dynamic"
import { useAccount } from "wagmi"
import { TSTK_TOKEN } from "@/utils/constants"

const TokenAmount = dynamic(() => import("./TokenAmount"), {
  ssr: false,
})

const UserStats = ({ maxWalletBuy }: { maxWalletBuy: bigint }) => {
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
        User {TSTK_TOKEN.symbol} Balance
      </Text>
      {address ? (
        <TokenAmount address={address} maxWalletBuy={maxWalletBuy} />
      ) : (
        <Text>Connect Wallet</Text>
      )}
    </Card>
  )
}

export default UserStats
