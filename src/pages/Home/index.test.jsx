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

  test("should display a form where can register or modify a pokemon", async () => {
    render(<Home />)
    const form = screen.getByRole("form", { name: /Pokemon Form/i });
    expect(form).toBeInTheDocument();

    const nameInput = screen.getByRole("textbox", { name: /Name/i });
    expect(nameInput).toBeInTheDocument();

    const imageInput = screen.getByRole("textbox", { name: /image/i });
    expect(imageInput).toBeInTheDocument();

    const attackSlider = screen.getByRole("slider", { name: /attack/i });
    expect(attackSlider).toBeInTheDocument();

    const defenseColumn = screen.getByRole("slider", { name: /defense/i });
    expect(defenseColumn).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancelar/i });
    expect(cancelButton).toBeInTheDocument();

    const saveButton = screen.getByRole("button", { name: /guardar/i });
    expect(saveButton).toBeInTheDocument();
  })

})
