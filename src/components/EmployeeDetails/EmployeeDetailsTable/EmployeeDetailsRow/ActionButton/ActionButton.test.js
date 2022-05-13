import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionButton from "./ActionButton";
import { editButtonText } from "../../../../../constants/strings";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  const onClick = jest.fn();
  render(<ActionButton onClick={onClick} text={editButtonText} />);
  const button = screen.getByText(editButtonText);

  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  test("Button Text", () => {
    expect(button).toHaveTextContent(editButtonText);
  });
});
