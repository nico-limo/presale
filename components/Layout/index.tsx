import { Text } from "@mantine/core"
import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="page-display">
        {/* NAVBAR */}
        <Navbar />
        {children}
        {/* FOOTER */}
        <footer className="layout">
          <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            ta="center"
            fz="xl"
            fw={700}
          >
            Indigo cyan gradient
          </Text>
        </footer>
      </div>
    </div>
  )
}

export default Layout
