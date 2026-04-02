import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../header/header";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  NavLink: ({ children }: any) => <div>{children}</div>,
}));

jest.mock("react-redux", () => ({
  useSelector: () => [],
}));


jest.mock("../../hooks/useDebounce", () => () => "");

jest.mock("../header/searchSuggestions", () => () => (
  <div>Suggestions</div>
));


describe("Header Component", () => {

  test("Header renders correctly", () => {

    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();
    expect(screen.getByText("Tv Series")).toBeInTheDocument();

  });

});