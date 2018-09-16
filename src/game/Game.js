import React, { Component } from 'react';
import './Game.css';
import _ from "lodash";

class Square extends Component {


    render() {
        let displaySymbol = "";
        if (this.props.value === 1) {
            displaySymbol = "X";
        } else if (this.props.value === 2) {
            displaySymbol = "O";
        }
        return (
            <div className="Game-square" onClick={this.props.onClick.bind(this.props, this.props.index)}>{displaySymbol}</div>
        );
    }

}

class Board extends Component {

    constructor() {
        super();
        this.state = {
            turn: 1,
            squares: [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
        }
    }

    onSquareClick(index) {
        let state = _.cloneDeep(this.state);
        state.squares[index[0]][index[1]] = this.state.turn;
        state.turn++;
        if (state.turn === 3)
            state.turn = 1;
        this.setState(state);
    }

    renderSquares(squares, rowIndex) {
        return (
            <div className="Game-Board-Row">
                {squares.map((el,i) => <Square className="Game-square" onClick={this.onSquareClick.bind(this)} index={[rowIndex,i]} value={el}/>)}
            </div>
        );
    }

    render() {
        return (
            <div className="Game-Board">
                {
                    this.state.squares.map((el, i) => this.renderSquares(el, i))
                }
            </div>
        );
    }

}

class Game extends Component {
    render() {
        return (
            <div className="Game">
                <Board/>
            </div>
        );
    }        
}

export default Game;
