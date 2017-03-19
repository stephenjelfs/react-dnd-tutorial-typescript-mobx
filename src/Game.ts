import {observable} from "mobx";

export class Game {

  @observable knightPosition = [1, 7];

  moveKnight(toX: number, toY: number): void {
    this.knightPosition = [toX, toY];
  }

  canMoveKnight(toX: number, toY: number) {
    const [x, y] = this.knightPosition;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
   }
}
