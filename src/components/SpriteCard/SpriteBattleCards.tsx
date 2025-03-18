import {Box, Grid} from "@mui/material";
import {useAppContext} from "@legion-builder/context";
import {SpriteBattleCard} from "./SpriteBattleCard";
import {DoubleSidedCard} from "./DoubleSidedCard";
import {SKIRMISH_BATTLE_CARDS_TEMPLATE} from "./SpriteCard.utils";

const battleCards = [
  // PAGE 1
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_1.png",
        sprite: "1:2",
      },
      back: {
        file: "SWQ_BattleCards-2_1.png",
        sprite: "1:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_1.png",
        sprite: "2:2",
      },
      back: {
        file: "SWQ_BattleCards-2_1.png",
        sprite: "2:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_1.png",
        sprite: "3:2",
      },
      back: {
        file: "SWQ_BattleCards-2_1.png",
        sprite: "3:1",
      },
    },
  },
  // PAGE 2
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_2.png",
        sprite: "1:2",
      },
      back: {
        file: "SWQ_BattleCards-2_2.png",
        sprite: "1:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_2.png",
        sprite: "2:2",
      },
      back: {
        file: "SWQ_BattleCards-2_2.png",
        sprite: "2:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_2.png",
        sprite: "3:2",
      },
      back: {
        file: "SWQ_BattleCards-2_2.png",
        sprite: "3:1",
      },
    },
  },
  // PAGE 3
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_3.png",
        sprite: "1:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_3.png",
        sprite: "2:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_3.png",
        sprite: "3:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_3.png",
        sprite: "1:2",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_3.png",
        sprite: "2:2",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_3.png",
        sprite: "3:2",
      },
    },
  },
  // PAGE 4
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_4.png",
        sprite: "1:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_4.png",
        sprite: "2:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_4.png",
        sprite: "3:1",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_4.png",
        sprite: "1:2",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_4.png",
        sprite: "2:2",
      },
    },
  },
  {
    imageRef: {
      front: {
        file: "SWQ_BattleCards-2_4.png",
        sprite: "3:2",
      },
    },
  },
];

export function SpriteBattleCards() {
  const {config} = useAppContext();
  console.log({cards: battleCards});
  return (
    <>
      <Grid container spacing={2}>
        {battleCards.map(({imageRef: {front, back}}, index) => {
          const src = `${config.pageConfig.assets.battleCardsUrl}/${front.file}`;
          const [x, y] = front.sprite.split(":").map((n) => +n);

          return (
            <Grid key={`flipCard_${index}`} item xs={12} md={4} lg={3}>
              <Box display="flex" justifyContent="center" alignItems="center">
                {back ? (
                  <DoubleSidedCard
                    front={<SpriteBattleCard src={src} spriteX={x} spriteY={y} />}
                    back={
                      <SpriteBattleCard
                        src={`${config.pageConfig.assets.battleCardsUrl}/${back.file}`}
                        spriteX={+back.sprite.split(":")[0]}
                        spriteY={+back.sprite.split(":")[1]}
                      />
                    }
                    height={SKIRMISH_BATTLE_CARDS_TEMPLATE.imageHeight}
                    width={SKIRMISH_BATTLE_CARDS_TEMPLATE.imageWidth}
                  />
                ) : (
                  <SpriteBattleCard src={src} spriteX={x} spriteY={y} />
                )}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
