import * as React from "react";
import {SpriteCards} from "@legion-builder/components/SpriteCard";
import {DoubleSidedCard} from "@legion-builder/components/SpriteCard/DoubleSidedCard";
import {SpriteUnitCard} from "@legion-builder/components/SpriteCard/SpriteUnitCard";
import {useAppContext} from "@legion-builder/context";
import {Box, Grid2, Paper, Typography} from "@mui/material";

import unitCards from "@legion-builder/data/2.6.0/unit.json";
import {UnitCard as Unit} from "@legion-builder/types/cards";
import {sortBy} from "lodash";
import {UnitCard} from "@legion-builder/components/UnitCard";
// import {isSpriteImageRef} from "@legion-builder/utils/spriteImageUtils";

export function CardsPage() {
  const {config} = useAppContext();

  const [sortCriteria, setSortCriteria] = React.useState<Array<string>>(["name"]);

  const units: Unit[] = sortBy(unitCards as Unit[], sortCriteria);

  const imageCard = {
    image: {
      front: {
        file: `${config.pageConfig.assets.playerCardsUrl}/SWQ_PlayerCards_JanuaryUpdate_1.png`,
        sprite: {x: 1, y: 1},
      },
      back: {
        file: `${config.pageConfig.assets.playerCardsUrl}/SWQ_PlayerCards_JanuaryUpdate_1.png`,
        sprite: {x: 2, y: 1},
      },
    },
  };
  return (
    <div>
      <Typography variant="h1">Cards</Typography>
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: 2,
          [theme.breakpoints.up("md")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        })}
      >
        {/* <Grid2 container spacing={2}> */}
        {units
          // .filter((card) => !(typeof card.imageRef === "string"))
          .map((card, index) => {
            return <UnitCard key={`flipCard_${index}`} unit={card} />;
          })}
        {/* </Grid2> */}
      </Box>
      <DoubleSidedCard
        front={
          <SpriteUnitCard
            src={imageCard.image.front.file}
            spriteX={imageCard.image.front.sprite.x}
            spriteY={imageCard.image.front.sprite.y}
          />
        }
        back={
          <SpriteUnitCard
            src={imageCard.image.back?.file ?? imageCard.image.front.file}
            spriteX={imageCard.image.back?.sprite.x ?? imageCard.image.front.sprite.x}
            spriteY={imageCard.image.back?.sprite.y ?? imageCard.image.front.sprite.y}
          />
        }
      />
      <SpriteCards />
    </div>
  );
}
