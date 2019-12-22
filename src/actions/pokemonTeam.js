import { fetchData } from "./shared";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ADD_POKEMON_TO_TEAM = "ADD_POKEMON_TO_TEAM";
export const REMOVE_POKEMON_FROM_TEAM = "REMOVE_POKEMON_FROM_TEAM";

export const addPokemonToTeam = (pokemon, id) => {
  return {
    type: ADD_POKEMON_TO_TEAM,
    pokemon,
    id
  };
};

export const handleAddPokemonToTeam = (pokemon, id) => {
  return dispatch => {
    dispatch(showLoading());
    return fetchData(pokemon.url).then(pokemonData => {
      console.log('pokemonData: ', JSON.stringify(pokemonData));
      dispatch(addPokemonToTeam(pokemonData, id));
      dispatch(hideLoading());
    });
  };
};

export const removePokemonFromTeam = id => {
  return {
    type: REMOVE_POKEMON_FROM_TEAM,
    id
  };
};
