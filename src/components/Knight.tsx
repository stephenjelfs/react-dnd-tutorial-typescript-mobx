import * as React from "react";
import {DragSource, DragSourceSpec, ConnectDragSource, DragSourceCollector} from "react-dnd";
import {ItemTypes} from "../Constants";

const knightSource: DragSourceSpec<KnightProps> = {
  beginDrag(props) {
    return {};
  }
};

const collect: DragSourceCollector = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
};

export interface KnightProps {
  connectDragSource?: ConnectDragSource;
  isDragging?: boolean;
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
export class Knight extends React.Component<KnightProps, undefined> {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </div>
    );
  }
}
