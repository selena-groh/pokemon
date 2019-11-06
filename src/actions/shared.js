import { receivePokemonList } from "./pokemonList";
import { receiveTypes } from "./types";
import { showLoading, hideLoading } from "react-redux-loading";

export const fetchData = url => fetch(url).then(res => res.json());

const fetchTypes = () =>
  fetchData("https://pokeapi.co/api/v2/type?limit=100").then(({ results }) =>
    Promise.all(results.map(type => fetchData(type.url)))
  );

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([
      fetchData("https://pokeapi.co/api/v2/pokemon?limit=2000"),
      fetchTypes()
    ]).then(([pokemonList, types]) => {
      dispatch(receivePokemonList(pokemonList.results));
      dispatch(receiveTypes(types));
      dispatch(hideLoading());
    });
  };
}
