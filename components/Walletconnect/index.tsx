import { ConnectKitButton } from "connectkit"

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

  return <ConnectKitButton />
}

export default Walletconnect
