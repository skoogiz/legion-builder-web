import * as React from "react";
import {Container, Typography} from "@mui/material";
import battleCards from "@legion-builder/data/2.6.0/battle.json";
import {Card, ObjectiveCard, type BattleCard} from "@legion-builder/types/cards";
import {SkirmishMissionBoard} from "@legion-builder/types/mission-skirmish";
import {CardImage} from "@legion-builder/components/CardImage";

function CardSection({children}: {children?: React.ReactNode}) {
  return (
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
      {children}
    </Container>
  );
}

const missionCards = (battleCards as BattleCard[]).filter(
  (card) => card.legalities?.skirmish,
);

const MISSION = SkirmishMissionBoard.createMission({
  bluePlayer: {
    name: "Player 1",
    faction: "Rebels",
  },
  redPlayer: {
    name: "Player 2",
    faction: "Empire",
  },
  objectives: missionCards.filter(
    (card) => card.category === "objective",
  ) as ObjectiveCard[],
  secondObjectives: missionCards.filter(
    (card) => card.category === "secondary-objective",
  ),
  advantages: missionCards.filter((card) => card.category === "advantage"),
});

function MissonCard({imageRef}: {imageRef: Card["imageRef"]}) {
  return <CardImage type="battle" imageRef={imageRef} size="large" />;
}

export function SkirmishMissionPage() {
  const [mission, setMission] = React.useState(MISSION);

  console.log({mission, setMission});

  return (
    <div>
      <Typography variant="h1">Skirmish Mission</Typography>
      <CardSection>
        <div>
          <Typography variant="h4" component="p">
            Objective
          </Typography>
          <MissonCard imageRef={mission.objective.imageRef} />
        </div>
        <div>
          <Typography variant="h4" component="p">
            Objective Map
          </Typography>
          <MissonCard imageRef={mission.objective.map.imageRef} />
        </div>
        <div>
          <Typography variant="h4" component="p">
            Second Objective
          </Typography>
          <MissonCard imageRef={mission.secondObjective.imageRef} />
        </div>
        <div>
          <Typography variant="h4" component="p">
            Blue Player
          </Typography>
          <div>
            <Typography variant="body1" component="span">
              {mission.players.blue.name}
            </Typography>
            {" - "}
            <Typography variant="body1" component="span">
              {mission.players.blue.faction}
            </Typography>
          </div>
          <MissonCard imageRef={mission.players.blue.advantage.imageRef} />
        </div>
        <div>
          <Typography variant="h4" component="p">
            Red Player
          </Typography>{" "}
          <div>
            <Typography variant="body1" component="span">
              {mission.players.red.name}
            </Typography>
            {" - "}
            <Typography variant="body1" component="span">
              {mission.players.red.faction}
            </Typography>
          </div>
          <MissonCard imageRef={mission.players.red.advantage.imageRef} />
        </div>
      </CardSection>
      {/* <CardSection>
        {(battleCards as BattleCard[])
          .filter((card) => card.legalities?.skirmish)
          .map((card) => {
            const {front} = card.imageRef as SpriteImageRef;

            if (!front.sprite) return null;

            const [x, y] = front.sprite.split(":");
            return (
              <SpriteBattleCard
                key={`${front.file}[${x}:${y}]`}
                src={`${config.pageConfig.assets.skirmishRulebookUrl}/${front.file}`}
                spriteX={+x}
                spriteY={+y}
                template={template}
              />
            );
          })}
      </CardSection> */}
    </div>
  );
}
