import React from "react";
import NavItem from "../../components/NavItem/NavItem";
import "./Navbar.css";

const Navbar = props => {
  return (
    <ul className="NavBar">
      <NavItem>
        <strong>Click Game</strong>
      </NavItem>
      <NavItem>{props.status}</NavItem>
      <NavItem>
        Score: {props.score} | Top Score: {props.topScore}
      </NavItem>
    </ul>
  );
};

export default Navbar;
