export enum TileColor {
  Black,
  White
}

export interface IFieldTile {
  color: TileColor,
  checked: boolean
}

export interface ICoords {
  x: number;
  y: number;
}