import React, { Component } from "react";
import "./Layout.css";

import NavBar from "../Navbar/Navbar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Clickables from "../Clickables/Clickables";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    correctGuess: true
  };

  render() {
    return (
      <div className="Layout">
        <NavBar
          status={
            this.state.correctGuess
              ? `You guessed Correctly!`
              : `Sorry You Lost :(`
          }
        />
        <Jumbotron />
        <Clickables />
        <Footer />
      </div>
    );
  }
}

export default Layout;
