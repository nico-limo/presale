import { render, screen } from "@testing-library/react"
import TokenStats from "@/components/TokenStats/index"

describe("<TokenStats />", () => {
  // Supongamos que tienes valores para availableAmount y maxTokens
  const availableAmount = "100"
  const maxTokens = "1000"

  test("render", () => {
    render(
      <TokenStats availableAmount={availableAmount} maxTokens={maxTokens} />,
    )

    // Verifica que los elementos del componente estén presentes en el DOM
    const remainingText = screen.getByText(/Remaining TSTK available/i)
    const amountStartText = screen.getByText((content) =>
      content.startsWith("100"),
    )

    expect(remainingText).toBeInTheDocument()
    expect(amountStartText).toBeInTheDocument()
  })

  test("calculates and displays the percentage correctly", () => {
    render(
      <TokenStats availableAmount={availableAmount} maxTokens={maxTokens} />,
    )
    const percentage =
      (parseFloat(availableAmount) / parseFloat(maxTokens)) * 100
    const progressElement = screen.getByRole("progressbar")
    expect(progressElement).toHaveStyle(`width: ${percentage}%`)
  })
})
