import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { formatPokemonName } from "../utils/utils";
import {
  handleAddPokemonToTeam,
  removePokemonFromTeam
} from "../actions/pokemonTeam";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: "rgba(255,255,255,0.8)",
    borderRadius: "4px",
    padding: "4px",
    margin: "4px",
    color: "white"
  }
};

const StyledAutocomplete = withStyles(styles)(props => {
  const { classes, pokemonList, dispatch, id } = props;

  return (
    <Autocomplete
      classes={{
        root: classes.root
      }}
      options={pokemonList}
      onChange={(event, value) => {
        return value !== null
          ? dispatch(handleAddPokemonToTeam(value, id))
          : dispatch(removePokemonFromTeam(id));
      }}
      getOptionLabel={option => formatPokemonName(option.name)}
      renderInput={params => (
        <TextField
          {...params}
          label={`Pokémon ${parseInt(id) + 1}`}
          fullWidth
        />
      )}
    />
  );
});

class PokemonMember extends Component {
  render() {
    const { pokemon, types } = this.props;
    const type0 =
      pokemon && pokemon.types.length > 0
        ? types[pokemon.types[0].type.name]
        : null;
    const type1 =
      pokemon && pokemon.types.length > 1
        ? types[pokemon.types[1].type.name]
        : null;
    const backgroundColor =
      pokemon && pokemon.types ? type0.colors.backgroundColor : "lightGray";
    const backgroundImage =
      pokemon && pokemon.types.length > 1
        ? `-webkit-linear-gradient(285deg, ${type0.colors.backgroundColor} 50%, ${type1.colors.backgroundColor} 50%)`
        : null;

    return (
      <Paper
        style={{
          backgroundColor,
          backgroundImage,
          minWidth: "300px"
        }}
      >
        <Grid container spacing={1} style={{ minHeight: "118px" }}>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            {pokemon && pokemon.sprites.front_default && (
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width="100"
                height="100"
              />
            )}
          </Grid>
          <Grid item xs={8}>
            <StyledAutocomplete {...this.props} />
          </Grid>
          <Grid item xs={12}>
            {pokemon && (
              <div>
                <p
                  style={{
                    color: type1
                      ? type1.colors.textColor
                      : type0.colors.textColor,
                    textAlign: "right"
                  }}
                >
                  Types: {pokemon.types.map(type => type.type.name).join(", ")}
                </p>
                <p
                  style={{
                    color: type1
                      ? type1.colors.textColor
                      : type0.colors.textColor,
                    textAlign: "right"
                  }}
                >
                  Abilities:{" "}
                  {pokemon.abilities
                    .map(ability => ability.ability.name)
                    .join(", ")}
                </p>
              </div>
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default connect(({ pokemonList, types }) => ({
  pokemonList,
  types
}))(withStyles(styles)(PokemonMember));
