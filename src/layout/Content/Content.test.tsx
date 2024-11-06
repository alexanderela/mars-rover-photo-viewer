import { afterEach, describe, expect, it, vi } from "vitest";
import { render, waitFor } from "../../tests/test-utils";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../../app/router";
import { mockRoverPhotosRaw } from "../../tests/mocks";

describe("<Content />", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  });

  it("renders Content component", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/", "/photos/rovers/curiosity?page=1"],
      initialIndex: 1
    });
    const result = render(<RouterProvider router={router} />);

    await waitFor(() => {
      const element = result.getByTestId(/Content/i);
      expect(element).toBeInTheDocument();
      expect(element).toMatchSnapshot();
    })
  });

  // Integration test that verifies that the correct component is shown when photos are successfully fetched.
  it("fetches and receives rover photos after navigating to correct route", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/", "/photos/rovers/curiosity?page=1"],
    });
    const result = render(<RouterProvider router={router} />);

    window.fetch = vi.fn().mockRejectedValueOnce(null);

    await waitFor(() => {
      expect(result.getByTestId(/Content/i)).toBeInTheDocument();
      expect(result.getByTestId(/CircularProgressLoader/i)).toBeInTheDocument();
      expect(result.queryByTestId(/PhotoViewer/i)).not.toBeInTheDocument();
      expect(result.queryByTestId(/PhotoViewer/i)).not.toBeInTheDocument();
        
    });

    window.fetch = vi.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ latest_photos: mockRoverPhotosRaw })
    });

    await waitFor(() => {
      expect(result.getByTestId(/Content/i)).toBeInTheDocument();
      expect(result.queryByTestId(/CircularProgressLoader/i)).not.toBeInTheDocument();
      expect(result.getByTestId(/PhotoViewer/i)).toBeInTheDocument();
    })
  });
});