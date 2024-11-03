import { describe, expect, it } from "vitest";
import { PhotoViewer } from "./PhotoViewer";
import { render, screen } from "../../../tests/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("<PhotoViewer", () => {
  it("renders PhotoViewer component", () => {
    render(
      <MemoryRouter>
        <PhotoViewer />
      </MemoryRouter>
    );
    const element = screen.getByTestId(/PhotoViewer/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
});