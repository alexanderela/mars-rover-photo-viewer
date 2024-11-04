import { describe, expect, it } from "vitest";
import { Card } from "./Card";
import { render, screen, fireEvent } from "../../tests/test-utils";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import { act } from "react";
import { mockSingleRoverPhoto } from "../../tests/mocks";

describe("<Card />", () => {
  it("renders Card component", () => {
    render(
      <MemoryRouter>
        <Card photo={mockSingleRoverPhoto} />
      </MemoryRouter>
    );
    const element = screen.getByTestId(/Card/i);
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });

  it("updates route to /id/:id upon clicking photo", () => {
    const routes = [
      {
        path: "/rovers/curiosity",
        element: <Card photo={mockSingleRoverPhoto} />
      }
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/rovers/curiosity?page=1"],
      initialIndex: 1
    });
    const result = render(<RouterProvider router={router} />);
    const element = result.getByTestId(/Card/i);
    expect(router.state.location.pathname).toEqual("/rovers/curiosity")
    act(() => {
      fireEvent.click(element);
    })
    expect(router.state.location.pathname).toEqual("/rovers/curiosity/id/1228204");
  });
});