import * as React from "react";
// import {DoubleSidedCard} from "@legion-builder/components/SpriteCard/DoubleSidedCard";
// import {SpriteUnitCard} from "@legion-builder/components/SpriteCard/SpriteUnitCard";
// import {useAppContext} from "@legion-builder/context";
import {/* Box, Container, Grid2, Paper, */ Typography} from "@mui/material";
import unitCards from "@legion-builder/data/2.6.0/unit.json";
import battleCards from "@legion-builder/data/2.6.0/battle.json";
import {/* BattleCard, */ Card /* UnitCard as Unit */} from "@legion-builder/types/cards";
// import {sortBy} from "lodash";
// import {UnitCard} from "@legion-builder/components/UnitCard";
// import {SpriteCommandCards} from "@legion-builder/components/SpriteCard/SpriteCommandCards";
// import {SpriteItemCards} from "@legion-builder/components/SpriteCard/SpriteItemCards";
// import {SpriteSkirmishBattleCards} from "@legion-builder/components/SpriteCard/SpriteSkirmishBattleCards";
// import {SpriteUnitCards} from "@legion-builder/components/SpriteCard/SpriteUnitCards";
// import {SpriteBattleCards} from "@legion-builder/components/SpriteCard/SpriteBattleCards";
import {SpriteCardList} from "@legion-builder/components/SpriteCard/SpriteCardList";

// import {isSpriteImageRef} from "@legion-builder/utils/spriteImageUtils";

// function CardSection({children}: {children?: React.ReactNode}) {
//   return (
//     <Container
//       disableGutters
//       sx={(theme) => ({
//         display: "grid",
//         gridTemplateColumns: "repeat(1, 1fr)",
//         gap: 2,
//         [theme.breakpoints.up("md")]: {
//           gridTemplateColumns: "repeat(2, 1fr)",
//         },
//         [theme.breakpoints.up("lg")]: {
//           gridTemplateColumns: "repeat(3, 1fr)",
//         },
//       })}
//     >
//       {children}
//     </Container>
//   );
// }

export function CardsPage() {
  // const {config} = useAppContext();

  // const [sortCriteria, setSortCriteria] = React.useState<Array<string>>(["name"]);

  // const units: Unit[] = sortBy(unitCards as Unit[], sortCriteria);

  // const imageCard = {
  //   image: {
  //     front: {
  //       file: `${config.pageConfig.assets.playerCardsUrl}/SWQ_PlayerCards_JanuaryUpdate_1.png`,
  //       sprite: {x: 1, y: 1},
  //     },
  //     back: {
  //       file: `${config.pageConfig.assets.playerCardsUrl}/SWQ_PlayerCards_JanuaryUpdate_1.png`,
  //       sprite: {x: 2, y: 1},
  //     },
  //   },
  // };
  return (
    <div>
      <Typography variant="h1">Cards</Typography>
      <SpriteCardList cards={[...battleCards, ...unitCards] as Card[]} />
      {/* <SpriteBattleCards /> */}
      {/* <SpriteSkirmishBattleCards /> */}
      {/* <SpriteCommandCards /> */}
      {/* <SpriteItemCards /> */}
      {/*
      <CardSection>
        {/ * <Grid2 container spacing={2}> * /}
        {units
          // .filter((card) => !(typeof card.imageRef === "string"))
          .map((card, index) => {
            return <UnitCard key={`flipCard_${index}`} unit={card} />;
          })}
        {/ * </Grid2> * /}
      </CardSection>
      */}
      {/* <DoubleSidedCard
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
      /> */}
      {/* <SpriteUnitCards /> */}
    </div>
  );
}
