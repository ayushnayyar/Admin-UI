import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom/extend-expect";
import { searchBarPlaceholderText } from "../../constants/strings";

describe("Input value", () => {
  it("updates on change", () => {
    const setSearchTerm = jest.fn(() => {});
    render(<SearchBar setSearchTerm={setSearchTerm} />);
    const searchInput = screen.queryByPlaceholderText(searchBarPlaceholderText);
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
