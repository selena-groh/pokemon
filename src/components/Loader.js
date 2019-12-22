import React from "react";
import pokemonIcon from "../img/pokeball.png";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader">
      <img src={pokemonIcon} alt="Loading icon" />
    </div>
  );
};

export default Loader;
