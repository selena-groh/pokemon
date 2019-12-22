import React, { Component } from "react";
import { connect } from "react-redux";
import { formatName } from "../utils/utils";

class Types extends Component {
  render() {
    const { types } = this.props;

    return (
      <div style={{ margin: "1rem" }}>
        <h3>Types</h3>
        <div>
          {Object.entries(types)
            .sort()
            .map(([typeName, type]) => (
              <div
                key={type.id}
                style={{
                  backgroundColor: type.colors.backgroundColor,
                  color: type.colors.textColor,
                  padding: "10px",
                  margin: "4px"
                }}
              >
                {formatName(typeName)} ({type.damageScore})
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default connect(({ types }) => ({
  types
}))(Types);
