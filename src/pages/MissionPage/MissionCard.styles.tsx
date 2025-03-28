import {css, styled} from "@mui/material";
import {getCategoryColor} from "./MissionCard.helpers";

export const CardContainer = styled("div")<{type: string}>(
  ({theme, type}) => css`
    background-color: ${getCategoryColor(type)};
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 0;
    border-radius: 16px;

    ${theme.breakpoints.up("md")} {
    }
  `,
);

export const CardHeader = styled("div")(
  ({theme}) => css`
    padding-block: ${theme.spacing(1)};
  `,
);

export const CardBody = styled("div")(
  ({theme}) => css`
    align-self: stretch;
    background-color: ${theme.palette.mode === "dark"
      ? "#282828"
      : theme.palette.background.paper};
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing(2)};
    border-radius: 16px;

    ${theme.breakpoints.up("md")} {
    }
  `,
);
