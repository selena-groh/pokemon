import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "./App.css";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProps = ({ pokemonList, types }) => {
  return {
    loading:
      Object.entries(pokemonList).length === 0 &&
      pokemonList.constructor === Object &&
      Object.entries(types).length === 0 &&
      types.constructor === Object
  };
};

export default connect(mapStateToProps)(App);
