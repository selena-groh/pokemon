import { combineReducers } from "redux";
import pokemonList from "./pokemonList";
import pokemonTeam from "./pokemonTeam";
import types from "./types";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  pokemonList,
  pokemonTeam,
  types,
  loadingBar: loadingBarReducer
});
