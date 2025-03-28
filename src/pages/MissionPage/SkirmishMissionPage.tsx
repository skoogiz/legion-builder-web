import * as React from "react";
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import battleCards from "@legion-builder/data/2.6.0/battle.json";
import {Card, ObjectiveCard, type BattleCard} from "@legion-builder/types/cards";
import {SkirmishMissionBoard} from "@legion-builder/types/mission-skirmish";
import {CardImage} from "@legion-builder/components/CardImage";
import {CardSection, Tile} from "./SkirmishMissionPage.styles";
import {MissionCard, SimpleCard} from "./MissionCard";

// const Tile = styled("div")<{area: string}>(
//   ({theme, area}) => css`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: ${theme.spacing(2)};

//     border: 4px solid black;
//     border-radius: 8px;
//     box-shadow:
//       14px 14px 0 -4px gold,
//       14px 14px 0 0 black;

//     ${theme.breakpoints.up("md")} {
//       grid-area: ${area};
//     }
//   `,
// );

// const CardTile = styled("div")(
//   ({theme}) => css`
//     background-color: ${theme.palette.grey[200]};
//     border-radius: 8px;
//     overflow: hidden;
//   `,
// );

// const getCategoryColor = (category: string) => {
//   switch (category) {
//     case "secondary-objective":
//       return "#d08138";
//     case "advantage":
//       return "#316037";
//     default:
//       return "#7e2b2f";
//   }
// };

// const CardTitle = styled("div")<{category: string}>(
//   ({theme, category}) => css`
//     background-color: ${getCategoryColor(category)};
//     padding-inline: ${theme.spacing(2)};
//     padding-block: ${theme.spacing(1)};
//   `,
// );

// const CardBottom = styled("div")<{category: string}>(
//   ({theme, category}) => css`
//     background-color: ${getCategoryColor(category)};
//     height: ${theme.spacing(2)};
//   `,
// );

// const CardContent = styled("div")(
//   ({theme}) => css`
//     padding: ${theme.spacing(4)};
//     display: flex;
//     justify-content: center;
//   `,
// );

type BattleInfoProps = {
  title: string;
  card: BattleCard;
};

// function BattleInfo({title, card}: BattleInfoProps) {
//   return (
//     <CardTile>
//       <CardTitle category={card.category}>
//         <Typography
//           variant="subtitle1"
//           color="primary.contrastText"
//           component="p"
//           sx={(theme) => ({
//             fontWeight: theme.typography.fontWeightBold,
//             textTransform: "uppercase",
//           })}
//         >
//           {title}
//         </Typography>
//       </CardTitle>
//       <CardContent>
//         <MissonCard imageRef={card.imageRef} />
//       </CardContent>
//       <CardBottom category={card.category} />
//     </CardTile>
//   );
// }

function CardInfo({card}: BattleInfoProps) {
  return <MissonCard imageRef={card.imageRef} />;
}

/*
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
*/

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

function MissonCard({
  imageRef,
  landscape = false,
}: {
  imageRef: Card["imageRef"];
  landscape?: boolean;
}) {
  const theme = useTheme();
  const xxl = useMediaQuery(theme.breakpoints.up("xxl"));
  return (
    <CardImage
      type="battle"
      imageRef={imageRef}
      size={xxl ? "large" : "medium"}
      orientation={landscape ? "landscape" : undefined}
    />
  );
}

export function SkirmishMissionPage() {
  const theme = useTheme();
  const [mission, setMission] = React.useState(MISSION);

  console.log({mission, setMission});

  return (
    <div
      style={{
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(6),
        paddingInline: theme.spacing(4),
        backgroundColor:
          theme.palette.mode === "dark" ? theme.palette.background.default : "#F2F1EB",
        minHeight: "100vh",
      }}
    >
      {/* <Container
      disableGutters
      sx={(theme) => ({
        pt: theme.spacing(2),
        pb: theme.spacing(6),
        bgcolor: "hotpink",
      })}
    > */}
      {/* <Typography variant="h1">Skirmish Mission</Typography> */}
      <CardSection>
        <Tile area="objective">
          <MissionCard type="objective">
            <CardInfo title="Objective" card={mission.objective} />
          </MissionCard>
        </Tile>
        <Tile area="map">
          <SimpleCard>
            {/* <Typography variant="h4" component="p">
              Objective Map
            </Typography> */}
            <MissonCard imageRef={mission.objective.map.imageRef} landscape />
          </SimpleCard>
        </Tile>
        <Tile area="secondary">
          <MissionCard type="secondary-objective">
            <CardInfo title="Second Objective" card={mission.secondObjective} />
          </MissionCard>
        </Tile>
        <Tile area="score">
          <SimpleCard>
            <Typography variant="h4" component="p">
              Victory Points
            </Typography>
          </SimpleCard>
        </Tile>
        {["blue", "red"].map((color, index) => {
          const player = mission.players[color as "blue" | "red"];
          console.log({player, index});
          return (
            <Tile area={`player${index + 1}`} key={`${color}-player`}>
              <MissionCard type={`${color}-player`}>
                <div>
                  <Typography variant="body1" component="span">
                    {player.name}
                  </Typography>
                  {" - "}
                  <Typography variant="body1" component="span">
                    {player.faction}
                  </Typography>
                </div>
                <CardInfo title="Advantage" card={player.advantage} />
              </MissionCard>
            </Tile>
          );
        })}
        {/* <Tile area="player1">
          <MissionCard type="blue-player">
            <div>
              <Typography variant="body1" component="span">
                {mission.players.blue.name}
              </Typography>
              {" - "}
              <Typography variant="body1" component="span">
                {mission.players.blue.faction}
              </Typography>
            </div>
            <BattleInfo title="Advantage" card={mission.players.blue.advantage} />
          </MissionCard>
        </Tile>
        <Tile area="player2">
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
          <BattleInfo title="Advantage" card={mission.players.red.advantage} />
        </Tile> */}
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
      {/* </Container> */}
    </div>
  );
}
