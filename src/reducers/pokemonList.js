import { RECEIVE_POKEMON_LIST } from "../actions/pokemonList";

export default function pokemonList(state = [], action) {
  switch (action.type) {
    case RECEIVE_POKEMON_LIST:
      return action.pokemonList;
    default:
      return state;
  }
}
