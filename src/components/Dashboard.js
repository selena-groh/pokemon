import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PokemonTeam from "./PokemonTeam";
import Types from "./Types";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Pokémon Matchup!</h1>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <PokemonTeam />
          </Grid>
          <Grid item>
            <Types />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
