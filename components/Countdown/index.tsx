import { Card, Flex, Text } from "@mantine/core"
import ReactCountdown, { CountdownRenderProps } from "react-countdown"
import BoxCountdown from "./BoxCountdown"
import { useStyles } from "@/styles/mantineStyles"

const Countdown = ({ timestamp }: { timestamp: number }) => {
  const { classes } = useStyles()
  const returnComponent = (dateInformation: CountdownRenderProps) => {
    const { minutes, hours, seconds } = dateInformation

    const items = [hours, minutes, seconds]
    const texts = {
      0: "Hours",
      1: "Minutes",
      2: "Seconds",
    }
    return (
      <Flex w="100%" justify="center" gap={10}>
        {items.map((item, index) => {
          return (
            <Flex
              direction="column"
              key={index}
              align="center"
              w="100%"
              gap={5}
            >
              <Flex gap={5} w="100%" justify="center">
                <BoxCountdown time={item.toString().slice(0, 1)} />
                <BoxCountdown time={item.toString().slice(1, 2)} />
              </Flex>
              <Text>{texts[index as keyof typeof texts]}</Text>
            </Flex>
          )
        })}
      </Flex>
    )
  }

  return (
    <Card withBorder radius="md" className={classes.cardContainer}>
      <Text fz="lg" fw={500}>
        Time Until next stage
      </Text>
      <ReactCountdown
        date={Date.now() + timestamp}
        renderer={(data) => returnComponent(data)}
      />
    </Card>
  )
}

export default Countdown
