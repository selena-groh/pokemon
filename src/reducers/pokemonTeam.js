import {
  ADD_POKEMON_TO_TEAM,
  REMOVE_POKEMON_FROM_TEAM
} from "../actions/pokemonTeam";

export default function pokemonTeam(state = [], action) {
  switch (action.type) {
    case ADD_POKEMON_TO_TEAM:
      return {
        ...state,
        [action.id]: action.pokemon
      };
    case REMOVE_POKEMON_FROM_TEAM:
      const copy = Object.assign({}, state);
      delete copy[action.id];
      return copy;
    default:
      return state;
  }
}
