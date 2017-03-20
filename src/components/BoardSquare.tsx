import * as React from "react";
import {observer} from "mobx-react";
import {Game} from "../Game";
import {Square} from "./Square";
import {Knight} from "./Knight";
import {DragTarget, DragTargetSpec, ConnectDragTarger, DragTargetCollector} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const squareTarget: DragTargetSpec = {
  drop(props, monitor) {
    moveKnight(props.x, props.y);
  }
};

export interface BoardSquareProps {
  x: number;
  y: number;
}

export class BoardSquare extends React.Component<BoardSquareProps, undefined> {
  render() {
    const { x, y } = this.props;
    const black = (x + y) % 2 === 1;

    return (
      <Square black={black}>
        {this.props.children}
      </Square>
    );
  }
}
