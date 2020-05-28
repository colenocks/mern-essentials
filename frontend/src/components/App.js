import React, { Component } from "react";
import "./App.css";
import PlayerList from "./Player/PlayerList";
import PlayerForm from "./Player/PlayerForm";
import PlayerSingle from "./Player/PlayerSingle";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };

    //bind the function so to use in a class
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          players: Response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
            <nav>
              <div className="nav-wrapper blue darken-1">
                <a href="/" className="brand-logo">
                  Socceer Management
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
