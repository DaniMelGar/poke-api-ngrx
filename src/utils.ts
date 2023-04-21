import { FetchedPkmnListModel, PkmnListModel, PkmnModel } from "./app/models/pkmn.interface";

export function transformPkmnListIntoPkmn(
  resp: FetchedPkmnListModel
): PkmnListModel[] {
  return resp.results.map((pkmn: any) => {
    const urlArr = pkmn.url.split('/');
    const id = urlArr[6];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      id,
      imgUrl,
      name: pkmn.name,
    };
  });
}

export function convertPokemonEvolutionChain(pkmnData: any) {
  const result = {
    name: pkmnData.chain.species.name,
    evolves_to: [],
  };
  if (pkmnData.chain.evolves_to && pkmnData.chain.evolves_to.length > 0) {
    result.evolves_to = pkmnData.chain.evolves_to.map((evolution: any) =>
      convertPokemonEvolutionChain({ chain: evolution })
    );
  }
  return result;
}
