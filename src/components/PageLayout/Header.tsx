import {styled} from "@mui/material";

export const Header = styled("header")<{maxHeight: number}>(({maxHeight}) => ({
  maxHeight,
}));
