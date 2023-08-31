import { Header, Container, Text } from "@mantine/core"

import dynamic from "next/dynamic"
import { LAYOUT_HEIGHT, useStyles } from "@/styles/mantineStyles"

const Walletconnect = dynamic(() => import("../Walletconnect"), {
  ssr: false,
})

const Navbar = () => {
  const { classes } = useStyles()

  return (
    <Header height={LAYOUT_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Text fz="xl" fw={700}>
          PRESALE APP
        </Text>
        <Walletconnect />
      </Container>
    </Header>
  )
}

export default Navbar
