import {PaletteMode} from "@mui/material";

export type ColorMode = PaletteMode | "system";

export interface AppSettings {
  colorMode: ColorMode;
  /*
  cardStyle: "images" | "text";
  chipSize: "small" | "medium";
  builderOrientation: "right" | "left";
  cascadeUpgradeSelection: "yes" | "no";
  includeCustomCards: "yes" | "no";
  includeCustomGameModes: "yes" | "no";
  */
}

export type AppSettingType = keyof AppSettings;
