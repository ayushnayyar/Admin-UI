import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmployeeDetailsData from "./EmployeeDetailsData";

afterEach(() => {
  cleanup();
});

describe("Data div", () => {
  render(<EmployeeDetailsData data={"Test"} />);
  const dataDiv = screen.getByText("Test");

  test("Div Rendering", () => {
    expect(dataDiv).toBeInTheDocument();
  });

  test("Div Text", () => {
    expect(dataDiv).toHaveTextContent("Test");
  });
});
