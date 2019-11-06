export const RECEIVE_POKEMON_LIST = "RECEIVE_POKEMON_LIST";

export const receivePokemonList = pokemonList => {
  return {
    type: RECEIVE_POKEMON_LIST,
    pokemonList
  };
};
