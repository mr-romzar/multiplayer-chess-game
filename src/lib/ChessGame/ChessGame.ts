import {PieceColor} from "./types";
import {IChessGameConstructorParams} from "./types/chess-game";

export class ChessGame {

  turn: PieceColor = PieceColor.White;
  playerColor: PieceColor | undefined;

  ChessGame(params: IChessGameConstructorParams) {
    const { playerColor } = params;
    this.playerColor = playerColor;
  }
}