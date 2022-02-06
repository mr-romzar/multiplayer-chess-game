import {
  IPiece,
  PieceColor,
  PieceType,
  TileColor
} from '../../lib/types/chess';
import { v4 as uuidv4 } from 'uuid';

export const initializePieces = () => {
  const piecesArray: IPiece[] = [];
  const setPiecesPositions = (type: PieceType, xOffset: number, yOffset: number) => {
    piecesArray.push({
      id: uuidv4(),
      color: PieceColor.Black,
      type: type,
      coords: {x: xOffset, y: yOffset}
    });
    piecesArray.push({
      id: uuidv4(),
      color: PieceColor.Black,
      type: type,
      coords: {x: 7 - xOffset, y: yOffset}
    });
    piecesArray.push({
      id: uuidv4(),
      color: PieceColor.White,
      type: type,
      coords: {x: xOffset, y: 7 - yOffset}
    });
    piecesArray.push({
      id: uuidv4(),
      color: PieceColor.White,
      type: type,
      coords: {x: 7 - xOffset, y: 7 - yOffset}
    });
  };
  //Pawns positioning
  for (let i = 0; i < 4; ++i) {
    setPiecesPositions(PieceType.Pawn, i, 1);
  }
  setPiecesPositions(PieceType.Rook, 0, 0);
  setPiecesPositions(PieceType.Knight, 1, 0);
  setPiecesPositions(PieceType.Bishop, 2, 0);
  piecesArray.push({
    id: uuidv4(),
    color: PieceColor.Black,
    type: PieceType.Queen,
    coords: {x: 3, y: 0}
  });
  piecesArray.push({
    id: uuidv4(),
    color: PieceColor.Black,
    type: PieceType.King,
    coords: {x: 4, y: 0}
  });

  piecesArray.push({
    id: uuidv4(),
    color: PieceColor.White,
    type: PieceType.Queen,
    coords: {x: 3, y: 7}
  });
  piecesArray.push({
    id: uuidv4(),
    color: PieceColor.White,
    type: PieceType.King,
    coords: {x: 4, y: 7}
  });
  return piecesArray;
};

export const initializeField = () => {
  // Init empty two-dimensional array 8x8
  const field = new Array<TileColor[]>(8)
  .fill(new Array<TileColor>(8).fill(TileColor.Black));

  return field.map((row, j) => {
    return row.map((tile, i) => {
        return (i + j) % 2
          ? TileColor.Black
          : TileColor.White;
      }
    );
  });
};