import {ICoords, PieceType, PieceColor, TileColor} from '../../lib/ChessGame/types';

export interface IChessFieldTileProps {
  tileColor: TileColor;
  checked?: boolean;
  onClick: (coords: ICoords) => void;
}

export interface IChessPieceProps {
  pieceColor: PieceColor;
  pieceType: PieceType;
  coords: ICoords;
}