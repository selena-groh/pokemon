import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { formatPokemonName } from "../utils/utils";
import {
  handleAddPokemonToTeam,
  removePokemonFromTeam
} from "../actions/pokemonTeam";

class PokemonMember extends Component {
  render() {
    const { pokemonList, dispatch, id } = this.props;

    return (
      <div>
        <Autocomplete
          options={pokemonList}
          onChange={(event, value) => {
            return value !== null
              ? dispatch(handleAddPokemonToTeam(value, id))
              : dispatch(removePokemonFromTeam(id));
          }}
          getOptionLabel={option => formatPokemonName(option.name)}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label={`Pokémon ${parseInt(id) + 1}`}
              fullWidth
            />
          )}
        />
      </div>
    );
  }
}

export default connect(({ pokemonList }) => ({
  pokemonList
}))(PokemonMember);
