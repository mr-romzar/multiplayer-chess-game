import { useMemo } from 'react';
import { ChessFieldContainer, ChessFieldTile, ChessPiece } from './layout';
import { IPiece } from '../../lib/types/chess';
import { initializeField, initializePieces } from './utils';

export const ChessField = () => {
  const fieldTiles = useMemo(initializeField, []);
  const pieces: IPiece[] = useMemo(initializePieces, []);
  return (
    <ChessFieldContainer>
      {
        fieldTiles.map((row, y) => (
          row.map((item, x) => {
            return <ChessFieldTile
              tileColor={item}
              onClick={() => console.log('clicked', {x, y})}
            />;
          })
        ))
      }
      {
        pieces.map(({id, type, color, coords}) => (
          <ChessPiece
            key={id}
            pieceType={type}
            pieceColor={color}
            coords={coords}
          />
        ))
      }
    </ChessFieldContainer>
  );
};