import { describe, expect, it } from "vitest";
import { render,  waitFor } from "../../../tests/test-utils";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "../../../app/router";
import { mockPreloadedState } from "../../../tests/mocks";

describe("<FavoritesViewer />", () => {  
  it("renders FavoritesViewer component", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/favorites/rovers/curiosity?page=1"],
    });
    
    const result = render(<RouterProvider router={router} />, {
      preloadedState: mockPreloadedState
    });

    await waitFor(() => {
      console.log("window.location.pathname: ", window.location.pathname);
      const element = result.getByTestId(/FavoritesViewer/i);
      expect(element).toBeInTheDocument();
      expect(element).toMatchSnapshot();
    });
  });
});