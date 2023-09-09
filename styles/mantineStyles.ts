import { createStyles, rem } from "@mantine/core"

// HEIGHT TO USE ON NAVBAR AND FOOTER
export const LAYOUT_HEIGHT = rem(60)

export const CARD_MAX_HEIGHT = "200px"

export const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  container: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: "1rem",
    gap: 4,
    backgroundColor: theme.colors.dark[6],
    [theme.fn.smallerThan("lg")]: {},

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },

    [theme.fn.smallerThan("sm")]: {},
  },
  card: {
    width: "100%",
    height: "fit-content",
    backgroundColor: theme.colors.dark[5],
    border: "2px solid",
    borderColor: theme.colors.blue[6],
    borderRadius: theme.radius.lg,
    padding: "1rem",
    justifyContent: "space-between",
    gap: 10,
  },
  cardStats: {
    width: "100%",
    gap: 10,
    [theme.fn.smallerThan("lg")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  cardContainer: {
    height: CARD_MAX_HEIGHT,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    padding: "1rem",
  },
}))
