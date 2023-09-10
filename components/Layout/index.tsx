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
      </div>
    </div>
  )
}

export default Layout
