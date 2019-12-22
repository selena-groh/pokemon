import { RECEIVE_TYPES } from "../actions/types";
import {
  ADD_POKEMON_TO_TEAM,
  REMOVE_POKEMON_FROM_TEAM
} from "../actions/pokemonTeam";

const typeColors = {
  bug: { backgroundColor: "#A8B820", textColor: "black" },
  dark: { backgroundColor: "#705848", textColor: "white" },
  dragon: { backgroundColor: "#7038F8", textColor: "white" },
  electric: { backgroundColor: "#F8D030", textColor: "black" },
  fairy: { backgroundColor: "#EE99AC", textColor: "white" },
  fighting: { backgroundColor: "#C03028", textColor: "white" },
  fire: { backgroundColor: "#F08030", textColor: "black" },
  flying: { backgroundColor: "#A890F0", textColor: "black" },
  ghost: { backgroundColor: "#705898", textColor: "white" },
  grass: { backgroundColor: "#78C850", textColor: "black" },
  ground: { backgroundColor: "#E0C068", textColor: "black" },
  ice: { backgroundColor: "#98D8D8", textColor: "black" },
  normal: { backgroundColor: "#A8A878", textColor: "black" },
  poison: { backgroundColor: "#A040A0", textColor: "white" },
  psychic: { backgroundColor: "#F85888", textColor: "black" },
  rock: { backgroundColor: "#B8A038", textColor: "black" },
  steel: { backgroundColor: "#B8B8D0", textColor: "black" },
  water: { backgroundColor: "#6890F0", textColor: "white" }
};

const arrayToObjectInitialValue = (array, keyField, initialValue) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = initialValue;
    return obj;
  }, {});

const getDamageMultipliers = (dmgRelations, dmgMultipliers) => {
  dmgRelations["double_damage_from"].forEach(
    type => (dmgMultipliers[type.name] *= 2)
  );
  dmgRelations["half_damage_from"].forEach(
    type => (dmgMultipliers[type.name] *= 0.5)
  );
  dmgRelations["no_damage_from"].forEach(
    type => (dmgMultipliers[type.name] *= 0)
  );
  return dmgMultipliers;
};

const applyDmgMultipliers = (pokemonType, types) => {
  Object.entries(pokemonType.damage_multipliers).map(
    ([typeName, multiplier]) => {
      types[typeName].damageScore *= multiplier;
    }
  );

  return types;
};

const removeDmgMultipliers = (pokemonType, types) => {
  Object.entries(pokemonType.damage_multipliers).map(
    ([typeName, multiplier]) => {
      types[typeName].damageScore /= multiplier;
    }
  );

  return types;
};

export default function types(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TYPES:
      const pokemonTypes = action.types.filter(
        type => type.pokemon.length !== 0
      );
      const initDmgMultipliers = arrayToObjectInitialValue(
        pokemonTypes,
        "name",
        1
      );

      const newState = {};

      pokemonTypes.forEach(type => {
        newState[type.name] = {
          ...type,
          damage_multipliers: getDamageMultipliers(type.damage_relations, {
            ...initDmgMultipliers
          }),
          colors: typeColors[type.name],
          damageScore: 1
        };
      });

      return newState;
    case ADD_POKEMON_TO_TEAM:
      const pokemon = action.pokemon;
      const type0 = pokemon.types[0].type.name;
      const type1 =
        pokemon.types.length > 1 ? pokemon.types[1].type.name : null;
      const newTypes = applyDmgMultipliers(state[type0], { ...state });
      return type1
        ? applyDmgMultipliers(state[type1], { ...newTypes })
        : newTypes;
    // case REMOVE_POKEMON_FROM_TEAM:
    //   return removeDmgMultipliers(state[action.pokemon.types[0].type.name], {
    //     ...state
    //   });
    default:
      return state;
  }
}
