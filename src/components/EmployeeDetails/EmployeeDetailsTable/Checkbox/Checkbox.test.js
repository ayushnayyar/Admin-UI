import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "./Checkbox";

afterEach(() => {
  cleanup();
});

it("Check if checkbox is checked/unchecked on click", () => {
  render(<Checkbox />);
  const checkbox = screen.getByTestId("checkbox");
  expect(checkbox.checked).toEqual(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});
