import {css, styled} from "@mui/material";

// #780C28
// #7e2b2f
// #d08138
// #316037
// #EE4E4E
// #6EACDA

export const getCategoryColor = (category: string) => {
  switch (category) {
    case "secondary-objective":
      return "#d08138";
    case "advantage":
      return "#316037";
    case "blue-player":
      return "#6EACDA";
    case "red-player":
      return "#EE4E4E";
    default:
      return "#7e2b2f";
  }
};

export const Tile = styled("div")<{area: string}>(
  ({theme, area}) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    padding: ${theme.spacing(0)};
    grid-area: ${area};
  `,
);

export const CardSection = styled("div")(
  ({theme}) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "objective"
      "secondary"
      "map"
      "score"
      "player1"
      "player2";
    gap: ${theme.spacing(2)};

    ${theme.breakpoints.up("sm")} {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "objective objective secondary secondary"
        "map map map map"
        "score score score score"
        "player1 player1 player2 player2";
      gap: ${theme.spacing(3)};
    }

    ${theme.breakpoints.up("lg")} {
      grid-template-columns: repeat(10, 1fr);
      grid-template-areas:
        "objective objective objective map map map map secondary secondary secondary"
        "objective objective objective score score score score secondary secondary secondary"
        "player1 player1 player1 player1 player1 player2 player2 player2 player2 player2";
      gap: ${theme.spacing(4)};
    }
  `,
);
