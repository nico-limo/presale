import { Card } from "@mantine/core"
import React from "react"

const BoxCountdown = ({ time }: { time: string }) => {
  return (
    <Card w={40} bg="blue" fw={500}>
      {time || "0"}
    </Card>
  )
}

export default BoxCountdown
