import { render, screen } from "@testing-library/react"
import React from "react"
import Button from "@/components/Button"

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText("Click me")
    expect(buttonElement).toBeInTheDocument()
  })
})
