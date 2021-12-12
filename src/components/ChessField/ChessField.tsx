import {useMemo} from 'react';
import {ChessFieldContainer, ChessFieldTile} from './layout';


export const ChessField = () => {
  const fieldTiles = useMemo(() => {
    const field =  new Array<string[]>(8)
    .fill(new Array(8).fill(null));

    return field.map((row, j) => {
      return row.map((tile, i) => {
        return (i + j) % 2
            ? `${process.env.PUBLIC_URL}/assets/tiles/square_brown_dark.svg`
            : `${process.env.PUBLIC_URL}/assets/tiles/square_brown_light.svg`
        }
      )
    });
  }, []);

  return (
    <ChessFieldContainer>
      {
        fieldTiles.map((row, y) => (
          row.map((item, x) => {
            return <ChessFieldTile
              imageUrl={item}
              coords={{x, y}}
              onClick={() => console.log('clicked', {x, y})}
            />
          })
        ))
      }
    </ChessFieldContainer>
  )
}