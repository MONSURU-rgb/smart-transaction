import { render, screen } from "@testing-library/react";
import { MainContent } from "../components/main";

describe("MainContent", () => {
  it("renders an h3 element with the word 'Salary'", () => {
    render(<MainContent />);

    // Use getByRole to find an h3 element
    const heading = screen.getByRole("heading", { level: 3 });

    // Check if the text content of the heading contains the word "Salary"
    expect(heading).toHaveTextContent(/Salary/i);
  });
});
