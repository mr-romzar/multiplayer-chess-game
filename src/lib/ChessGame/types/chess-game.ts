import {PieceColor} from "./piece";

export interface IChessGameConstructorParams {
  playerColor: PieceColor;
  onPlayerMove: () => void;
  onEnemyMove: () => void;
}