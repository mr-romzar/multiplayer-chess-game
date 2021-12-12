import {useMemo} from 'react';
import {ChessFieldContainer, ChessFieldTile, ChessPiece} from './layout';
import {IPiece, PieceColor, PieceType, TileColor} from '../../lib/types/chess';
import {v4 as uuidv4} from 'uuid';

export const ChessField = () => {
  const fieldTiles = useMemo(() => {
    // Init empty two-dimensional array 8x8
    const field = new Array<TileColor[]>(8)
    .fill(new Array<TileColor>(8).fill(TileColor.Black));

    return field.map((row, j) => {
      return row.map((tile, i) => {
        return (i + j) % 2
            ? TileColor.Black
            : TileColor.White;
        }
      )
    });
  }, []);

  const pieces: IPiece[] = useMemo(() => {
    const piecesArray: IPiece[] = [];
    const positionPieces = (type: PieceType, xOffset: number, yOffset: number) => {
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
    }
    //Pawns positioning
    for (let i = 0; i < 4; ++i) {
      positionPieces(PieceType.Pawn, i, 1)
    }
    positionPieces(PieceType.Rook, 0, 0);
    positionPieces(PieceType.Knight, 1, 0);
    positionPieces(PieceType.Bishop, 2, 0);
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
  }, [])

  return (
    <ChessFieldContainer>
      {
        fieldTiles.map((row, y) => (
          row.map((item, x) => {
            return <ChessFieldTile
              tileColor={item}
              onClick={() => console.log('clicked', {x, y})}
            />
          })
        ))
      }
      {
        pieces.map(({id, type, color, coords}) => <ChessPiece key={id} pieceType={type} pieceColor={color} coords={coords} />)
      }
    </ChessFieldContainer>
  )
}