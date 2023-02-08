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

  test("should display a button to create a new pokemon", async () => {
    render(<Home />)
    const searchInput = screen.getByRole("button", { name: /nuevo/i });
    expect(searchInput).toBeInTheDocument();
  })

  test("should display a table with a list of pokemons", async () => {
    render(<Home />)
    const searchInput = screen.getByRole("table", { name: /table/i });
    expect(searchInput).toBeInTheDocument();

    const nameColumn = screen.getByRole("columnheader", { name: /nombre/i });
    expect(nameColumn).toBeInTheDocument();

    const imageColumn = screen.getByRole("columnheader", { name: /imagen/i });
    expect(imageColumn).toBeInTheDocument();

    const attackColumn = screen.getByRole("columnheader", { name: /ataque/i });
    expect(attackColumn).toBeInTheDocument();

    const defenseColumn = screen.getByRole("columnheader", { name: /defensa/i });
    expect(defenseColumn).toBeInTheDocument();

    const actionsColumn = screen.getByRole("columnheader", { name: /acciones/i });
    expect(actionsColumn).toBeInTheDocument();

  })


})
