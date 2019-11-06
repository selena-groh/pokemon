import React, { Component } from "react";
import { connect } from "react-redux";
import { formatPokemonName } from "../utils/utils";
import PokemonMember from "./PokemonMember";

class PokemonTeam extends Component {
  render() {
    const { pokemonList, pokemonTeam } = this.props;

    return (
      <div style={{ margin: "1rem" }}>
        <h3>My Pokémon Team</h3>
        {[...Array(6)].map((e, i) => (
          <PokemonMember key={i} id={i} />
        ))}
        {Object.entries(pokemonTeam).length === 0 ? (
          <p>No Pokémon added. Add some above!</p>
        ) : (
          <div>
            {Object.entries(pokemonTeam)
              .sort((a, b) => b[0] > a[0])
              .map(([id, pokemon]) => (
                <div key={pokemon.id}>
                  {pokemon.sprites.front_default && (
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                    />
                  )}
                  Pokémon {parseInt(id) + 1}: {formatPokemonName(pokemon.name)}{" "}
                  ({pokemon.types.map(type => type.type.name).join(", ")})
                </div>
              ))}
          </div>
        )}
        <h3>List of all Pokémon</h3>
        <ul>
          {pokemonList.map(pokemon => (
            <li key={pokemon.url}>
              <a href={pokemon.url}>{formatPokemonName(pokemon.name)}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(({ pokemonList, pokemonTeam }) => ({
  pokemonList,
  pokemonTeam
}))(PokemonTeam);
