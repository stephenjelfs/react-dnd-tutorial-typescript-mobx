import * as React from "react";
import {observer} from "mobx-react";
import {Game} from "../Game";
import {Square} from "./Square";
import {Knight} from "./Knight";

export interface BoardProps {
  game: Game;
}

@observer
export class Board extends React.Component<BoardProps, {}> {
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }

  renderSquare(i: number) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.game.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}
           onClick={() => this.handleSquareClick(x, y)}
           >
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  private handleSquareClick(toX: number, toY: number) {
    const {game} = this.props;

    if (game.canMoveKnight(toX, toY)) {
      game.moveKnight(toX, toY);
    }
  }
}
