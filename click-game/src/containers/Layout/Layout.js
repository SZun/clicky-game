import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar status="Winner" />
        <Jumbotron />
      </div>
    );
  }
}

export default Layout;
