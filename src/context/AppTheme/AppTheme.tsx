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
import {createPalette} from "./createPalette";

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

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    extraLarge: true;
    huge: true;
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
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1200,
        xxl: 1440,
      },
    },
    palette: {
      mode,
      secondary: {
        main: "#948979",
      },
    },
    components: {
      MuiSvgIcon: {
        variants: [
          {
            props: {fontSize: "extraLarge"},
            style: {
              fontSize: "3rem",
            },
          },
          {
            props: {fontSize: "huge"},
            style: {
              fontSize: "5rem",
            },
          },
        ],
      },
    },
  });

  const legionPalette = createPalette(theme);

  theme = defineTheme(theme, {
    palette: {
      background: {
        hero: theme.palette.augmentColor({color: pageConfig.hero.bgColor}),
      },
      ...legionPalette.palette,
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
