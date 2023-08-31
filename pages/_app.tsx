import { MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"
import Head from "next/head"
import "@/styles/globals.css"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { polygonMumbai } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import Layout from "@/components/Layout"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID! }),
      publicProvider(),
    ],
  )

  const config = createConfig({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    publicClient,
  })

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
        <WagmiConfig config={config}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WagmiConfig>
      </MantineProvider>
    </>
  )
}
