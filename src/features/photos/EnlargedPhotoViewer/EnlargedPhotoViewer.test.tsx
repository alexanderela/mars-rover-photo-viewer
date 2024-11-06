import { describe, expect, it, vi } from "vitest";
import { render,  waitFor } from "../../../tests/test-utils";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../../../app/router";
import { mockPreloadedState, mockRoverPhotosRaw } from "../../../tests/mocks";

describe("<EnlargedPhotoViewer />", () => {
  window.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve({ latest_photos: mockRoverPhotosRaw })
  });
  
  it("renders EnlargedPhotoViewer component", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [ "/photos/rovers/curiosity/id/1228212?page=1"],
    });
    
    const result = render(<RouterProvider router={router} />, {
      preloadedState: mockPreloadedState
    });

    await waitFor(() => {
      console.log("window.location.pathname: ", window.location.pathname);
      const element = result.getByTestId(/EnlargedPhotoViewer/i);
      expect(element).toBeInTheDocument();
      expect(element).toMatchSnapshot();
    });
  });
});