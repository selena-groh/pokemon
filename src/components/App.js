import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "./App.css";
import LoadingBar from "react-redux-loading-bar";
import Dashboard from "./Dashboard";
import Loader from "./Loader";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log(this.props.loading);
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? <Loader /> : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProps = ({ pokemonList, types }) => {
  return {
    loading:
      pokemonList.length === 0 &&
      Object.entries(types).length === 0 &&
      types.constructor === Object
  };
};

export default connect(mapStateToProps)(App);
