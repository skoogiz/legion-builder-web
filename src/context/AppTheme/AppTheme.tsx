import * as React from "react";
import {
  createTheme as defineTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  Theme,
  PaletteMode,
  PaletteColor,
} from "@mui/material";
import {useAppContext} from "@legion-builder/context";

import type {ThemeProviderProps} from "@mui/material/styles/ThemeProvider";
import {PageConfig} from "@legion-builder/config";

const globalStyle = (
  <GlobalStyles
    styles={{
      body: {
        maxWEidth: "100vw",
        margin: 0,
        padding: 0,
        overscrollBehaviorY: "contain",
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        width: "100%",
      },
    }}
  />
);

declare module "@mui/material/styles" {
  interface TypeBackground {
    hero: PaletteColor;
  }
}

const createTheme = ({
  mode,
  pageConfig,
}: {
  mode: PaletteMode;
  pageConfig: PageConfig;
}): Theme => {
  let theme = defineTheme({
    palette: {
      mode,
      secondary: {
        main: "#948979",
      },
    },
  });

  theme = defineTheme(theme, {
    palette: {
      background: {
        hero: theme.palette.augmentColor({color: pageConfig.hero.bgColor}),
      },
    },
  });

  return theme;
};

export function AppThemeProvider({children, ...rest}: Omit<ThemeProviderProps, "theme">) {
  const {
    mode,
    config: {pageConfig},
  } = useAppContext();

  const theme = React.useMemo(
    () =>
      createTheme({
        mode,
        pageConfig,
      }),
    [mode, pageConfig],
  );

  return (
    <ThemeProvider theme={theme} {...rest}>
      <CssBaseline />
      {globalStyle}
      {children}
    </ThemeProvider>
  );
}
