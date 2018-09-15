import React, { Component } from 'react';
import './Lobby.css';
import { FindGameButton } from "./FindGameButton";

class Lobby extends Component {

  constructor() {
    super();
    this.state = {
      visibility: {
        findGameButton: true,
        lookingForGame: false
      }
    }
  }

  render() {
    return (
      <div className="Lobby">
        {this.state.visibility.findGameButton && <FindGameButton onClick={() => this.onFindGameClick()}/>}
        {this.state.visibility.lookingForGame && 
          <div className="looking-for-game-text" style={{visibility: this.state.visibility.lookingForGame}}>Looking For Game...</div>}
      </div>
    );
  }

  onFindGameClick() {
    if (!this.state.visibility.lookingForGame) {
      this.setState({
        visibility: {
          findGameButton: false,
          lookingForGame: true
        }
      });
      setTimeout(() => {
        this.props.gameFound();
      }, 2000);
    }
  }
}

export default Lobby;
