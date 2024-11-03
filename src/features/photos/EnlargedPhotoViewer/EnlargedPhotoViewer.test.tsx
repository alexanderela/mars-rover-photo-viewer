import { describe, expect, it } from "vitest";
import { EnlargedPhotoViewer } from "./EnlargedPhotoViewer";
import { render, screen } from "../../../tests/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("<EnlargedPhotoViewer />", () => {
  it("renders EnlargedPhotoViewer component", () => {
    render(
      <MemoryRouter>
        <EnlargedPhotoViewer />
      </MemoryRouter>
    );
    const element = screen.getByTestId(/EnlargedPhotoViewer/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
});