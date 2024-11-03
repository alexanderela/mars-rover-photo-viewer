import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "../tests/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("<App />", () => {
  it("renders App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const element = screen.getByTestId(/App/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
});