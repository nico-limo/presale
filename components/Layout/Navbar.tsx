import { Header, Container, rem, Text } from "@mantine/core"
import Walletconnect from "../Walletconnect"
import { useStyles } from "@/styles/mantineStyles"

const HEADER_HEIGHT = rem(60)

const Navbar = () => {
  const { classes } = useStyles()

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
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
