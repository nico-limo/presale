import { MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"
import Head from "next/head"
import "@/styles/globals.css"
import { useEffect, useState } from "react"
import { WagmiConfig, createConfig } from "wagmi"
import { polygonMumbai } from "wagmi/chains"
import Layout from "@/components/Layout"
import { ConnectKitProvider, getDefaultConfig } from "connectkit"

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID!,
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

      // Required
      appName: "Presale Challenge",

      // Optional
      appDescription: "Apresale demo app to buy tokens",
      chains: [polygonMumbai],
    }),
  )

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
          components: {
            InputWrapper: {
              defaultProps: {
                inputWrapperOrder: ["label", "error", "input", "description"],
              },
            },
          },
        }}
      >
        <WagmiConfig config={config}>
          <ConnectKitProvider>
            <Layout>{mounted && <Component {...pageProps} />}</Layout>
          </ConnectKitProvider>
        </WagmiConfig>
      </MantineProvider>
    </>
  )
}
