import type {UnitCard} from "@legion-builder/types/cards";
import {Box, css, Paper, styled, Typography, useTheme} from "@mui/material";

type Props = {
  unit: UnitCard;
};

const slanting = (posetive = false) => css`
  position: absolute;
  content: "";
  right: -10%;
  top: 0;
  height: 100%;
  width: 20%;
  background-color: inherit;
  -webkit-transform: skewX(${posetive ? "" : "-"}30deg);
  -moz-transform: skewX(${posetive ? "" : "-"}30deg);
  -ms-transform: skewX(${posetive ? "" : "-"}30deg);
  transform: skewX(${posetive ? "" : "-"}30deg);
`;

const Slant = styled("div")(
  ({theme}) => css`
    position: relative;
    background-color: #e7cccc;
    color: ${theme.palette.getContrastText("#E7CCCC")};
    max-width: 60%;
    padding-inline: ${theme.spacing(1)};

    &:after {
      ${slanting()}
    }
  `,
);

export function UnitCard({unit: {name, subtitle, unitType, isUnique}}: Props) {
  const theme = useTheme();
  return (
    <Paper sx={{justifySelf: "stretch", minHeight: 120}} square>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            backgroundColor: "#001524",
            color: theme.palette.getContrastText("#001524"),
            paddingInline: theme.spacing(1),
          }}
        >
          <Typography variant="subtitle1" component="p">
            {isUnique && <b style={{paddingRight: "0.3em"}}>&#8226;</b>}
            {name}
            {subtitle && `: ${subtitle}`}
          </Typography>
          {/* {subtitle && (
            <Typography variant="caption" component="p">
              {subtitle}
            </Typography>
          )} */}
        </div>
        <Slant>
          <Typography variant="overline" component="span" lineHeight={0} p={0} m={0}>
            {unitType}
          </Typography>
        </Slant>
      </Box>
    </Paper>
  );
}
/*
      <div>
        <Typography variant="subtitle1" component="p">
          {isUnique && <b style={{paddingRight: "0.3em"}}>&#8226;</b>}
          {name}
        </Typography>
        {subtitle && (
          <Typography variant="caption" component="p">
            {subtitle}
          </Typography>
        )}
      </div>

*/

/*
{/ * <p>{card.identifiers.name}</p> * /}
{/ * {isSpriteImageRef(card.imageRef) && (
    <SpriteUnitCard
    src={`${config.pageConfig.assets.playerCardsUrl}/${card.imageRef.front.file}`}
    spriteX={card.imageRef.front.sprite.x}
    spriteY={card.imageRef.front.sprite.y}
    />
)} * /}
*/
