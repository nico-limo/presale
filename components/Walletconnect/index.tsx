"use client"
import { Button } from "@mantine/core"
import { useState } from "react"

const Walletconnect = () => {
  const [isConnected, setIsConnected] = useState(false)

  const onConnect = (status: boolean) => {
    setIsConnected(status)
  }

  if (isConnected)
    return (
      <Button onClick={() => onConnect(false)} radius="lg" color="grape">
        0x000...0000
      </Button>
    )

  return (
    <Button onClick={() => onConnect(true)} radius="lg">
      Connect Wallet
    </Button>
  )
}

export default Walletconnect
