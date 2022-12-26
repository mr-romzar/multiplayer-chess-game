import {ICoords} from './field';

export enum PieceColor {
  Black,
  White
}

export enum PieceType {
  King,
  Queen,
  Bishop,
  Knight,
  Rook,
  Pawn
}

export interface IPiece {
  id: string;
  color: PieceColor;
  type: PieceType;
  coords: ICoords;
}