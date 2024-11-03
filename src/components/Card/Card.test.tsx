import { describe, expect, it } from "vitest";
import { Card } from "./Card";
import { render, screen, fireEvent } from "../../tests/test-utils";
import { RoverPhoto } from "../../types/common";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import { act } from "react";

const mockPhoto: RoverPhoto = {
  id: 1228204,
  name: "Curiosity",
  roverName: "curiosity",
  imgSrc: "https://mars.nasa.gov/msl-raw-images/msss/04102/mhli/4102MH0001530001404334U01_DXXX.jpg",
  earthDate: "2024-02-19",
  sol: 4102,
  cameraName: "MAHLI",
  cameraFullName: "Mars Hand Lens Imager"
}

describe("<Card />", () => {
  it("renders Card component", () => {
    render(
      <MemoryRouter>
        <Card photo={mockPhoto} />
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
        element: <Card photo={mockPhoto} />
      }
    ]
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/rovers/curiosity"],
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