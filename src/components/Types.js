import React, { Component } from "react";
import { connect } from "react-redux";
import { formatName, formatGenerationName } from "../utils/utils";

class Types extends Component {
  render() {
    const { types } = this.props;

    return (
      <div style={{ margin: "1rem" }}>
        <h3>Types</h3>
        <ul>
          {types.map(type => (
            <li key={type.id}>
              {formatName(type.name)} (
              {type.move_damage_class && `${type.move_damage_class.name}, `}
              {formatGenerationName(type.generation.name)})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(({ types }) => ({
  types
}))(Types);
