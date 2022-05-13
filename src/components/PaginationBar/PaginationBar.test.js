import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationBar from "./PaginationBar";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  render(<PaginationBar checked={[]} paginationGroup={[1, 2, 3]} />);
  const paginationBarDiv = screen.getByTestId("pagination-bar");

  test("Button Rendering", () => {
    expect(paginationBarDiv).toBeInTheDocument();
  });
});
