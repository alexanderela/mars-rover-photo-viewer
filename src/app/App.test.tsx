import { describe, expect, it } from "vitest";
import { render, waitFor } from "../tests/test-utils";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./router";

describe("<App />", () => {
  it("renders App component", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/", "/photos/rovers/curiosity?page=1"],
      initialIndex: 1
    });
    const result = render(<RouterProvider router={router} />);

    await waitFor(() => {
      const element = result.getByTestId(/App/i);
      expect(element).toBeInTheDocument();
      expect(element).toMatchSnapshot();
    });
  });
});