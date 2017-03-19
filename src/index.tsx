import * as React from "react";
import * as ReactDOM from "react-dom";
import {Board} from "./components/Board";
import {Game} from "./Game";

ReactDOM.render(
    <Board game={new Game()} />,
    document.getElementById("root")
);
