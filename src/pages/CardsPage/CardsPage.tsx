import * as React from "react";
import {SpriteCards} from "@legion-builder/components/SpriteCard";
import {DoubleSidedCard} from "@legion-builder/components/SpriteCard/DoubleSidedCard";
import {SpriteUnitCard} from "@legion-builder/components/SpriteCard/SpriteUnitCard";
import {useAppContext} from "@legion-builder/context";
import {Box, Container, Grid2, Paper, Typography} from "@mui/material";
import unitCards from "@legion-builder/data/2.6.0/unit.json";
import {UnitCard as Unit} from "@legion-builder/types/cards";
import {sortBy} from "lodash";
import {UnitCard} from "@legion-builder/components/UnitCard";
import {EwoksIcon, RebelsIcon, PykesIcon} from "@legion-builder/components/Icons";
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
      <Typography variant="h1" fontSize="">
        Cards
      </Typography>
      <div>
        <EwoksIcon color="error" size="small" />
        <EwoksIcon color="error" size="medium" />
        <EwoksIcon color="error" size="large" />
        <EwoksIcon color="error" size="extraLarge" />
        <EwoksIcon color="error" size="huge" />
      </div>
      <div>
        <RebelsIcon color="error" size="small" />
        <RebelsIcon color="error" size="medium" />
        <RebelsIcon color="error" size="large" />
        <RebelsIcon color="error" size="extraLarge" />
        <RebelsIcon color="error" size="huge" />
      </div>
      <div>
        <PykesIcon color="error" size="small" />
        <PykesIcon color="error" size="medium" />
        <PykesIcon color="error" size="large" />
        <PykesIcon color="error" size="extraLarge" />
        <PykesIcon color="error" size="huge" />
      </div>
      <Container
        disableGutters
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
      </Container>
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
