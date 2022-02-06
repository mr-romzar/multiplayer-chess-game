import { useState } from 'react';
import { ChessFieldContainer, ChessFieldTile, ChessPiece } from './layout';
import { ICoords, IFieldTile, IPiece } from '../../lib/types/chess';
import { initializeField, initializePieces } from './utils';

export const ChessField = () => {
  const [fieldTiles, setFieldTiles] = useState(initializeField());
  const [pieces, setPieces] = useState(initializePieces());

  const [selectedPieceId, setSelectedPieceId] = useState<string | null>(null);

  const movePiece = (pieces: IPiece[], pieceId: string, newPosition: ICoords) => {
    const selectedPieceIndex = pieces.findIndex(piece => piece.id === pieceId);
    const temp = [...pieces];
    temp[selectedPieceIndex].coords = newPosition;
    return temp;
  };

  const deletePiece = (pieces: IPiece[], pieceId: string) => {
    const selectedPieceIndex = pieces.findIndex(piece => piece.id === pieceId);
    const temp = [...pieces];
    temp.splice(selectedPieceIndex, 1);
    return temp;
  };

  const setFieldTileChecked = (field: IFieldTile[][], position: ICoords, checked: boolean) => {
    const temp = [...field];
    temp[position.y][position.x].checked = checked;
    return temp;
  };

  const getPieceCoordsById = (pieces: IPiece[], id: string): ICoords | null => {
    return pieces.find(piece => piece.id === id)?.coords || null;
  };


  const handleTileClick = (coords: ICoords) => () => {
    if (selectedPieceId) {
      setFieldTiles(tiles => {
        const selectedPieceCoords = getPieceCoordsById(pieces, selectedPieceId);
        if (selectedPieceCoords) {
          return setFieldTileChecked(tiles, selectedPieceCoords, false);
        }
        return tiles;
      });

      setPieces(pieces => movePiece(pieces, selectedPieceId, coords));
      setSelectedPieceId(null);
    }
  };

  const handlePieceClick = (id: string, coords: ICoords) => () => {
    if (selectedPieceId) {
      setPieces(pieces => {
        const temp = deletePiece(pieces, id);
        return movePiece(temp, selectedPieceId, coords);
      });
      setFieldTiles(tiles => {
        const selectedPieceCoords = getPieceCoordsById(pieces, selectedPieceId);
        if (selectedPieceCoords) {
          return setFieldTileChecked(tiles, selectedPieceCoords, false);
        }
        return tiles;
      });
      setSelectedPieceId(null);
    } else {
      setSelectedPieceId(id);
      setFieldTiles(tiles => setFieldTileChecked(tiles, coords, true));
    }
  };

  return (
    <ChessFieldContainer>
      {
        fieldTiles.map((row, y) => (
          row.map((item, x) => {
            return <ChessFieldTile
              tileColor={item.color}
              checked={item.checked}
              onClick={handleTileClick({x, y})}
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
            onClick={handlePieceClick(id, coords)}
          />
        ))
      }
    </ChessFieldContainer>
  );
};