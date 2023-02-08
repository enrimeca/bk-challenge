import { rest } from "msw";

export const handlers = [
  rest.get("https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/:idAuthor", (req, res, ctx) => {
    return res(
      ctx.json([
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
        },
      ])
    );
  }),
];