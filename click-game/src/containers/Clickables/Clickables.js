import React, { Component } from "react";

import "./Clickables.css";
import Character from "../../components/Character/Character";

import Tammy from "../../assets/media/tammy.png";
import Beth from "../../assets/media/beth.jpg";
import BirdPerson from "../../assets/media/bird_person.jpeg";
import Rick from "../../assets/media/rick.jpg";
import Jerry from "../../assets/media/jerry.jpg";
import MrPB from "../../assets/media/mr_pb.png";
import MeeSeeks from "../../assets/media/mr_me_seeks.png";
import MailMan from "../../assets/media/mail_man.jpg";
import KrombopulusMicheal from "../../assets/media/krombopulos_micheal.png";
import Summer from "../../assets/media/summer.png";
import Squanchy from "../../assets/media/squanchy.png";
import Goldenfold from "../../assets/media/goldenfold.jpg";

class Clickables extends Component {
  state = {
    hasBeenClicked: false
  };

  randomImg = masterList => {
    const masterImages = [];
    for (var i = 0; i < 12; i++) {
      let figure = masterList[Math.floor(Math.random() * masterList.length)];
      const index = masterList.indexOf(figure);
      masterList.splice(index, 1);
      masterImages.push(figure);
      if (i === 11) {
        return masterImages;
      }
    }
  };

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

  character = () =>
    this.randomImg(this.masterList).map(headshot => (
      <Character image={headshot} clicked={() => this.character()} />
    ));

  render() {
    return <div className="Clickables">{this.character()}</div>;
  }
}

export default Clickables;
