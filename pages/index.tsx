import { Flex } from "@mantine/core"
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
  const { data, refetch } = usePresaleContract()
  const { availableAmount, price, maxWalletBuy, timestamp } = data

  return (
    <>
      <Head key="PRESALE">
        <title>Presale</title>
        <meta name="description" content="A challenge" />
      </Head>
      <Flex className="container" direction="column" gap={20}>
        {timestamp ? <Countdown timestamp={timestamp} /> : null}
        <Flex gap={20} justify="space-between" align="center" w="100%">
          <UserStats />
          <TokenStats availableAmount={availableAmount} />
        </Flex>
        <UserAmount price={price} maxBuy={maxWalletBuy} refetch={refetch} />
      </Flex>
    </>
  )
}
