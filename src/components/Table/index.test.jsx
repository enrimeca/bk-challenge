import { render, screen } from "@testing-library/react";
import Table from ".";

const pokemons = [
  {
    "id": 111,
    "name": "Pokemon1_Test",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "attack": 11,
    "defense": 22,
    "hp": 33,
    "type": "Electric",
    "idAuthor": 1
  },
  {
    "id": 222,
    "name": "Pokemon2_Test",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "attack": 44,
    "defense": 55,
    "hp": 66,
    "type": "Normal",
    "idAuthor": 1
  }
]


test("should display a list of pokemons in the table", async () => {
  render(<Table pokemons={pokemons} />)

  const rows = screen.getAllByRole('row')
  expect(rows).toHaveLength(3); // table header and two rows

  const nameCells = screen.getAllByRole('cell')
  const nameCellsText = nameCells.map((item) => item.textContent)
  expect(nameCellsText).toEqual(["Pokemon1_Test", "", "11", "22", "edit.svgdelete.svg", "Pokemon2_Test", "", "44", "55", "edit.svgdelete.svg"])

})
