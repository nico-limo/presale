import { Flex, Skeleton } from "@mantine/core"
import dynamic from "next/dynamic"
import Head from "next/head"
import usePresaleContract from "@/hooks/usePresaleContract"

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
  const { data, refetch, isLoading } = usePresaleContract()
  const { availableAmount, price, maxWalletBuy, timestamp, maxTokens } = data

  return (
    <>
      <Head key="PRESALE">
        <title>Presale</title>
        <meta name="description" content="A challenge" />
      </Head>
      <Flex className="container" direction="column" gap={20}>
        <Skeleton visible={isLoading}>
          <Countdown timestamp={timestamp} />
        </Skeleton>

        <Skeleton visible={isLoading}>
          <UserStats maxWalletBuy={maxWalletBuy} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <TokenStats availableAmount={availableAmount} maxTokens={maxTokens} />
        </Skeleton>

        <UserAmount price={price} maxBuy={maxWalletBuy} refetch={refetch} />
      </Flex>
    </>
  )
}
