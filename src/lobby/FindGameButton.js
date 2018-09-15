import React from "react";
import "./FindGameButton.css";

function FindGameButton(props) {
    return (
        <button className="find-game-button" onClick={props.onClick}>Find Game</button>
    );
}

export { FindGameButton };
