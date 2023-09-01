import { Button } from "@mantine/core"

import { useAccount, useConnect } from "wagmi"
import { disconnect } from "wagmi/actions"

const Walletconnect = () => {
  const { address } = useAccount()
  const { connect, connectors } = useConnect()

  const onConnect = (status: boolean) => {
    if (status) {
      connect({ connector: connectors[0] })
    } else {
      disconnect()
    }
  }

  if (address)
    return (
      <Button onClick={() => onConnect(false)} radius="lg" color="grape">
        {`${address.slice(0, 4)}...${address.slice(-4)}`}
      </Button>
    )

  return (
    <Button onClick={() => onConnect(true)} radius="lg">
      Connect Wallet
    </Button>
  )
}

export default Walletconnect
