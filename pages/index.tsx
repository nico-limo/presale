import { Button } from "@mantine/core"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head key="PRESALE">
        <title>Presale</title>
        <meta name="description" content="A challenge" />
      </Head>
      <main className="container">
        <Button color="blue" radius="lg" maw="150px">
          Primary Button
        </Button>
      </main>
    </>
  )
}
