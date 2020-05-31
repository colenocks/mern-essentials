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
      canDelete: false,
    };

    //bind the function so to use in a class
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    this.getAllPlayers();
  }

  deletePlayer(playerid) {
    const url = "http://localhost:5000/" + playerid;
    axios
      .delete(url)
      .then((result) => {
        if (result) {
          this.setState({ players: result.data.Player }, () => {
            window.M.toast({ html: result.data.message });
            this.getAllPlayers();
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAllPlayers() {
    const url = "http://localhost:5000";
    axios
      .get(url)
      .then((result) => {
        this.setState({
          players: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
      canDelete: true,
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
          <div className="col s4">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s8">
            <PlayerSingle
              player={this.state.currentPlayer}
              canDelete={this.state.canDelete}
              deletePlayer={this.deletePlayer}
            />
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
