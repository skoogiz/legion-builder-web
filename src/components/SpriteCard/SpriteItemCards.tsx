import {Box, Grid} from "@mui/material";
import {useAppContext} from "@legion-builder/context";
import {SpriteItemCard} from "./SpriteItemCard";

const getItemCards = () => {
  const cmds = [];
  for (let i = 23; i <= 32; i++) {
    for (let y = 1; y <= 2; y++) {
      for (let x = 1; x <= 3; x++) {
        if (i === 22 && y === 2 && x > 1) continue;
        cmds.push({
          imageRef: {
            front: {
              file: `SWQ_PlayerCards_JanuaryUpdate_${i}.png`,
              sprite: `${x}:${y}`,
            },
          },
        });
      }
    }
  }
  return cmds;
};

export function SpriteItemCards() {
  const {config} = useAppContext();
  return (
    <>
      <Grid container spacing={2}>
        {getItemCards().map(({imageRef: {front}}, index) => {
          const src = `${config.pageConfig.assets.playerCardsUrl}/${front.file}`;
          const [x, y] = front.sprite.split(":").map((n) => +n);
          return (
            <Grid key={`flipCard_${index}`} item xs={12} md={4} lg={3}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <SpriteItemCard src={src} spriteX={x} spriteY={y} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
