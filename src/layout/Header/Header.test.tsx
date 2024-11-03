import { describe, expect, it } from "vitest";
import { Header } from "./Header";
import { render, screen } from "../../tests/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("<Header />", () => {
  it("renders Header component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const element = screen.getByText(/Mars Rover Photo Viewer/i);
    expect(element).toBeInTheDocument()
    expect(element).toMatchSnapshot();
  });
});