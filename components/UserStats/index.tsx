import { Text, Card } from "@mantine/core"
import dynamic from "next/dynamic"
import { useAccount } from "wagmi"
import { useStyles } from "@/styles/mantineStyles"
import { TSTK_TOKEN } from "@/utils/constants"

const TokenAmount = dynamic(() => import("./TokenAmount"), {
  ssr: false,
})

const UserStats = ({ maxWalletBuy }: { maxWalletBuy: bigint }) => {
  const { classes } = useStyles()
  const { address } = useAccount()

  return (
    <Card withBorder radius="md" className={classes.cardContainer}>
      <Text fz="xs" tt="uppercase" w="100%" fw={700} c="dimmed">
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
