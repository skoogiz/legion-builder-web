import {Box, Grid} from "@mui/material";
import {SpriteBattleCard} from "./SpriteBattleCard";
import {DoubleSidedCard} from "./DoubleSidedCard";
import {Card} from "@legion-builder/types/cards";
import {SpriteCardTemplate} from "./SpriteCard.types";
import {getTemplate} from "./SpriteCard.utils";
import {isSpriteImageRef, mapImageRef} from "@legion-builder/utils/imageUtils";
import {useConfig} from "@legion-builder/hooks/useConfig";

type Props = {
  cards: Card[];
  template?: SpriteCardTemplate;
};

const position = (sprite: string): [x: number, y: number] => {
  const [x, y] = sprite.split(":").map((n) => +n);
  return [x, y];
};

export function SpriteCardList({cards, template}: Props) {
  const {resolveSpriteSrc} = useConfig();
  return (
    <>
      <Grid container spacing={2}>
        {cards
          .filter((card) => isSpriteImageRef(card.imageRef))
          .map((card, index) => {
            const {__typename, imageRef} = card;

            if (!imageRef) return null;

            const {front, back} = mapImageRef(imageRef);

            if (!front.sprite) return null;

            const src = resolveSpriteSrc(front.file);
            const [x, y] = position(front.sprite);

            const spriteTemplate = template ?? getTemplate(front.file, __typename);

            return (
              <Grid key={`sprite-card:${index}`} item xs={12} md={4} lg={3}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  {back && back.sprite ? (
                    <DoubleSidedCard
                      front={
                        <SpriteBattleCard
                          src={src}
                          spriteX={x}
                          spriteY={y}
                          template={spriteTemplate}
                        />
                      }
                      back={
                        <SpriteBattleCard
                          src={resolveSpriteSrc(back.file)}
                          spriteX={position(back.sprite)[0]}
                          spriteY={position(back.sprite)[1]}
                          template={spriteTemplate}
                        />
                      }
                      height={spriteTemplate.imageHeight}
                      width={spriteTemplate.imageWidth}
                    />
                  ) : (
                    <SpriteBattleCard
                      src={src}
                      spriteX={x}
                      spriteY={y}
                      template={spriteTemplate}
                    />
                  )}
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
