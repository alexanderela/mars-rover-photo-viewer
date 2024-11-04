import { describe, expect, it } from "vitest";
import { render,  waitFor } from "../../../tests/test-utils";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../../../app/router";

describe("<EnlargedPhotoViewer />", () => {
  it("renders EnlargedPhotoViewer component", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [ "/rovers/curiosity/id/1228236?page=1"],
    });
    
    const result = render(<RouterProvider router={router} />);

    await waitFor(() => {
      console.log("window.location.pathname: ", window.location.pathname)
      const element = result.getByTestId(/EnlargedPhotoViewer/i);
      expect(element).toBeInTheDocument();
      expect(element).toMatchSnapshot();
    });
  });
});