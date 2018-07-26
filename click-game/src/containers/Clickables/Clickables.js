import React, { Component } from 'react';

import './Clickables.css';
import Character from '../../components/Character/Character';
import NavBar from '../Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Footer from '../../components/Footer/Footer';

import Tammy from '../../assets/media/tammy.png';
import Beth from '../../assets/media/beth.jpg';
import BirdPerson from '../../assets/media/bird_person.jpeg';
import Rick from '../../assets/media/rick.jpg';
import Jerry from '../../assets/media/jerry.jpg';
import MrPB from '../../assets/media/mr_pb.png';
import MeeSeeks from '../../assets/media/mr_me_seeks.png';
import MailMan from '../../assets/media/mail_man.jpg';
import KrombopulusMicheal from '../../assets/media/krombopulos_micheal.png';
import Summer from '../../assets/media/summer.png';
import Squanchy from '../../assets/media/squanchy.png';
import Goldenfold from '../../assets/media/goldenfold.jpg';

class Clickables extends Component {
  masterList = [
    Tammy,
    Beth,
    BirdPerson,
    Rick,
    Jerry,
    MrPB,
    MeeSeeks,
    MailMan,
    KrombopulusMicheal,
    Summer,
    Squanchy,
    Goldenfold
  ];

  state = {
    hasBeenClicked: false,
    characters: this.masterList,
    score: 0,
    topScore: 0,
    guess: 'Take a guess!',
    clicked: []
  };

  randomImg = masterList => {
    const masterImages = [];
    const banan = [...masterList];
    for (var i = 0; i < 12; i++) {
      let figure = banan[Math.floor(Math.random() * banan.length)];
      const index = banan.indexOf(figure);
      banan.splice(index, 1);
      masterImages.push(figure);
      if (i === 11) {
        return masterImages;
      }
    }
  };

  character = id => {
    if (!this.state.clicked.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        guess: 'You guessed correctly!!!',
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.setState({
        guess: 'You guessed incorrectly! :(',
        score: 0,
        clicked: []
      });
      if (this.state.topScore < this.state.score) {
        this.setState({ topScore: this.state.score });
      }
    }
    this.setState({
      characters: this.randomImg(this.masterList),
      hasBeenClicked: true
    });
  };

  render() {
    return (
      <div>
        <NavBar
          status={this.state.guess}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className="Clickables">
          {this.state.characters.map(headshot => (
            <Character
              image={headshot}
              clicked={() => this.character(headshot)}
              key={this.state.characters.indexOf(headshot)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Clickables;
