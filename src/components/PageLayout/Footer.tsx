import {styled} from "@mui/material";

export const Footer = styled("footer")(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
}));
