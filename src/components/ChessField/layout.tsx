import styled, { css } from 'styled-components';
import { IChessFieldTileProps, IChessPieceProps } from './types';
import {
  PieceType,
  PieceColor,
  TileColor,
} from '../../lib/ChessGame/types';
import {
  CHESS_FIELD_DARK_TILES_PUBLIC_URL,
  CHESS_FIELD_LIGHT_TILES_PUBLIC_URL, CHESS_PIECES_PUBLIC_URL
} from './constants';

export const ChessFieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

// value 12.5% is using for setting the elements' size to make elements responsive to the container width.
// 12.5% = 100% / 8 (board has 8 x 8 tiles, so each tile has 12.5% of the board width and height)
//
// height: 0 and padding-bottom: 12.5%  are used to make elements' height equal to their width
// (relative units cannot be used to set the height of an element if the height of the parent element is not explicitly set)

export const ChessFieldTile = styled.div<IChessFieldTileProps>`
  width: 12.5%;
  height: 0;
  padding-bottom: 12.5%;
  background-image: ${props => `url(${props.tileColor === TileColor.Black ? CHESS_FIELD_DARK_TILES_PUBLIC_URL : CHESS_FIELD_LIGHT_TILES_PUBLIC_URL})`};
  box-sizing: border-box;
  ${props => props.checked ? css`border: 1px solid greenyellow` : css`border: 1px solid transparent`}
`;

export const ChessPiece = styled.div<IChessPieceProps>`
  position: absolute;
  top: ${props => props.coords.y * 12.5}%;
  left: ${props => props.coords.x * 12.5}%;
  width: 12.5%;
  height: 0;
  padding-bottom: 12.5%;
  background-image: ${props => `url(${CHESS_PIECES_PUBLIC_URL}${props.pieceColor === PieceColor.Black ? 'b' : 'w'}_${PieceType[props.pieceType].toLowerCase()}.svg)`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 80%;
  transition: top 0.3s, left 0.3s;
  box-sizing: border-box;
`;