import React, { Component } from "react";
import { connect } from "react-redux";
import PokemonMember from "./PokemonMember";
import Grid from "@material-ui/core/Grid";

class PokemonTeam extends Component {
  render() {
    const { pokemonTeam } = this.props;

    return (
      <div style={{ margin: "1rem" }}>
        <h3>My Pokémon Team</h3>
        <Grid container spacing={2}>
          {[...Array(6)].map((e, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <PokemonMember id={i} pokemon={pokemonTeam[i]} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default connect(({ pokemonTeam }) => ({
  pokemonTeam
}))(PokemonTeam);
