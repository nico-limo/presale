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
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            ta="center"
            fz="xl"
            fw={700}
          >
            FOOTER
          </Text>
        </footer>
      </div>
    </div>
  )
}

export default Layout
