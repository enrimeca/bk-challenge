import { render, screen } from "@testing-library/react";
import Home from './index';

describe("should be render correctly", () => {

  test("should display a title in the Home Page", async () => {
    render(<Home />)
    const mainTitle = screen.getByRole("heading", { name: /Listado de Pokemon/i });
    expect(mainTitle).toBeInTheDocument();
  })

  test("should display a search input in the Home Page", async () => {
    render(<Home />)
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    expect(searchInput).toBeInTheDocument();
  })

})
