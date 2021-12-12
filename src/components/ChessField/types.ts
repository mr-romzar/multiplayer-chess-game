import {ICoords} from '../../lib/types/chess';

export interface IChessFieldTileProps {
  coords: ICoords;
  imageUrl: string;
  checked?: boolean;
  onClick: (coords: ICoords) => void;
}