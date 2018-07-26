import React from "react";
import "./Character.css";

const Character = props => (
  <img className="Character" src={props.image} onClick={props.clicked} alt="" />
);

export default Character;
