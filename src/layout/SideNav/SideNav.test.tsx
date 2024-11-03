import { describe, expect, it } from "vitest";
import { SideNav } from "./SideNav";
import { render, screen } from "../../tests/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("<SideNav", () => {
  it("renders SideNav component", () => {
    render(
      <MemoryRouter>
        <SideNav />
      </MemoryRouter>
    );
    const element = screen.getByTestId(/SideNav/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
});