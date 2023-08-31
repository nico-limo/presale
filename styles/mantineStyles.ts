import { createStyles, rem } from "@mantine/core"

// HEIGHT TO USE ON NAVBAR AND FOOTER
export const LAYOUT_HEIGHT = rem(60)

export const useStyles = createStyles(() => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}))
