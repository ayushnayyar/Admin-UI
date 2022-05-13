import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationButton from "./PaginationButton";
import { goToFirstPageText } from "../../../constants/strings";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  const onClick = jest.fn();
  render(<PaginationButton onClick={onClick} text={goToFirstPageText} />);
  const button = screen.getByText(goToFirstPageText);

  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  test("Button Text", () => {
    expect(button).toHaveTextContent(goToFirstPageText);
  });
});

test("Handle onClick", async () => {
  const onClick = jest.fn();
  render(<PaginationButton onClick={onClick} text={goToFirstPageText} />);
  const button = screen.getByText(goToFirstPageText);
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
