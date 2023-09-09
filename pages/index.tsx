import { Flex, Skeleton } from "@mantine/core"
import dynamic from "next/dynamic"
import Head from "next/head"
import usePresaleContract from "@/hooks/usePresaleContract"
import { CARD_MAX_HEIGHT, useStyles } from "@/styles/mantineStyles"

const Countdown = dynamic(() => import("@/components/Countdown"), {
  ssr: false,
})
const UserStats = dynamic(() => import("@/components/UserStats"), {
  ssr: false,
})
const UserAmount = dynamic(() => import("@/components/UserAmount"), {
  ssr: false,
})
const TokenStats = dynamic(() => import("@/components/TokenStats"), {
  ssr: false,
})

export default function Home() {
  const { classes } = useStyles()

  const { presaleData, isLoading } = usePresaleContract()
  const { availableAmount, price, maxWalletBuy, timestamp, maxTokens } =
    presaleData

  return (
    <>
      <Head key="PRESALE">
        <title>Presale</title>
        <meta name="description" content="A challenge" />
      </Head>
      <Flex className={classes.container}>
        <Flex className={classes.card} direction="column">
          <Flex
            className={classes.cardStats}
            direction="row"
            justify="space-between"
          >
            <Skeleton visible={isLoading} mah={CARD_MAX_HEIGHT}>
              <Countdown timestamp={timestamp} />
            </Skeleton>

            <Skeleton visible={isLoading} mah={CARD_MAX_HEIGHT}>
              <UserStats maxWalletBuy={maxWalletBuy} />
            </Skeleton>
            <Skeleton visible={isLoading} mah={CARD_MAX_HEIGHT}>
              <TokenStats
                availableAmount={availableAmount}
                maxTokens={maxTokens}
              />
            </Skeleton>
          </Flex>

          <UserAmount price={price} maxBuy={maxWalletBuy} />
        </Flex>
      </Flex>
    </>
  )
}
