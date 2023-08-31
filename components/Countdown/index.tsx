import { Card, Flex, Text } from "@mantine/core"
import ReactCountdown, { CountdownRenderProps } from "react-countdown"

const Countdown = () => {
  const returnComponent = (dateInformation: CountdownRenderProps) => {
    const { days, minutes, hours, seconds } = dateInformation

    const items = [days, hours, minutes, seconds]
    const texts = {
      0: "Days",
      1: "Hours",
      2: "Minutes",
      3: "Seconds",
    }
    return (
      <Flex w="100%" gap={10}>
        {items.map((item, index) => {
          return (
            <Flex direction="column" key={index} align="center" gap={5}>
              <Flex gap={5}>
                <Card bg="blue" fw={500}>
                  {item.toString().slice(0, 1) || "0"}
                </Card>
                <Card bg="blue" fw={500}>
                  {item.toString().slice(1, 2) || "0"}
                </Card>
              </Flex>
              <Text>{texts[index as keyof typeof texts]}</Text>
            </Flex>
          )
        })}
      </Flex>
    )
  }
  return (
    <Card
      withBorder
      radius="md"
      padding="xl"
      h="100%"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Text fz="lg" fw={500}>
        Time Until next stage
      </Text>
      <ReactCountdown
        date={Date.now() + 1000000000}
        renderer={(data) => returnComponent(data)}
      />
    </Card>
  )
}

export default Countdown
