import { render, screen } from "@testing-library/react";
import Home from './index';

describe("should be render correctly", () => {

  test("should display a title in the Home Page", async () => {
    render(<Home />)
    const mainTitle = screen.getByRole("heading", { name: /Listado de Pokemon/i });
    expect(mainTitle).toBeInTheDocument();
  })

})
