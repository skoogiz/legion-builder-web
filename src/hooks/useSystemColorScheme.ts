import * as React from "react";
import {PaletteMode} from "@mui/material";
import {useMediaQuery} from "@react-hookz/web";

export const useSystemColorScheme = (): PaletteMode => {
  const isDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = React.useMemo(() => (isDarkTheme ? "dark" : "light"), [isDarkTheme]);
  return mode;
};
