import { Flex } from "@mantine/core"
import dynamic from "next/dynamic"
import Head from "next/head"
import TokenStats from "@/components/TokenStats"
import UserStats from "@/components/UserStats"

const Countdown = dynamic(() => import("@/components/Countdown"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head key="PRESALE">
        <title>Presale</title>
        <meta name="description" content="A challenge" />
      </Head>
      <Flex className="container" direction="column" gap={20}>
        <Countdown />
        <Flex gap={20} justify="space-between" align="center" w="100%">
          <UserStats />
          <TokenStats />
        </Flex>
      </Flex>
    </>
  )
}
