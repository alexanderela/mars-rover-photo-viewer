import { describe, expect, it } from "vitest";
import { Content } from "./Content";
import { render, screen } from "../../tests/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("<Content />", () => {
  it("renders Content component", () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );
    const element = screen.getByTestId(/Content/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
});