import { render } from "@testing-library/react";
import { MainContent } from "../components/main";

it("renders homepage unchanged", () => {
  const { container } = render(<MainContent />);
  expect(container).toMatchSnapshot();
});
