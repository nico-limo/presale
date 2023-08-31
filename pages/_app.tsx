import { MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"
import Head from "next/head"
import Layout from "@/components/Layout"
import "@/styles/globals.css"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}
