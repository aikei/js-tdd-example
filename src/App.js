import React, { Component } from 'react';
import './App.css';
import Lobby from "./lobby/Lobby";
import Game from "./game/Game";

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentState: "lobby"
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.currentState === "lobby" && <Lobby gameFound={() => this.onGameFound()}/>}
        {this.state.currentState === "game" && <Game/>}
      </div>
    );
  }

  onGameFound() {
    this.setState({
      currentState: "game"
    });
  }

}

export default App;
