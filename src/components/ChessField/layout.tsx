import styled, {css} from 'styled-components';
import {IChessFieldTileProps} from './types';

export const ChessFieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ChessFieldTile = styled.div<IChessFieldTileProps>`
  width: 12.5%;
  height: 0;
  padding-bottom: 12.5%;
  background-image: ${props => `url(${props.imageUrl})`};
  box-sizing: border-box;
  ${props => props.checked ? css`border: 1px solid greenyellow` : null}
`