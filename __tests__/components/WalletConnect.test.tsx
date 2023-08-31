import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Walletconnect from "@/components/Walletconnect"

describe("Walletconnect Component", () => {
  test("renders 'Connect Wallet' button initially", () => {
    // Render the component
    render(<Walletconnect />)
    // Find the "Connect Wallet" button
    const connectButton = screen.getByText("Connect Wallet")
    // Verify that the button is present on the screen
    expect(connectButton).toBeInTheDocument()
  })

  test("displays wallet address after connecting", () => {
    // Render the component
    render(<Walletconnect />)
    // Find the "Connect Wallet" button
    const connectButton = screen.getByText("Connect Wallet")
    // Simulate clicking the "Connect Wallet" button
    fireEvent.click(connectButton)

    // Find the button displaying the wallet address
    const addressButton = screen.getByText("0x000...0000")
    // Verify that the address button is present on the screen
    expect(addressButton).toBeInTheDocument()
  })

  test("reverts to 'Connect Wallet' button after disconnecting", () => {
    // Render the component
    render(<Walletconnect />)
    // Find the "Connect Wallet" button
    const connectButton = screen.getByText("Connect Wallet")
    // Simulate clicking the "Connect Wallet" button
    fireEvent.click(connectButton)

    // Find the button displaying the mock wallet address
    const disconnectButton = screen.getByText("0x000...0000")
    // Simulate clicking the disconnect button
    fireEvent.click(disconnectButton)

    // Find the "Connect Wallet" button again
    const connectButtonAfterDisconnect = screen.getByText("Connect Wallet")
    // Verify that the "Connect Wallet" button is present after disconnecting
    expect(connectButtonAfterDisconnect).toBeInTheDocument()
  })
})
