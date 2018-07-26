import React, { Component } from 'react';
import './Layout.css';

import NavBar from '../Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Clickables from '../Clickables/Clickables';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    correctGuess: true,
    score: 0,
    topScore: 0
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
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Clickables />
        <Footer />
      </div>
    );
  }
}

export default Layout;
