import {AppSettings, AppSettingType, ColorMode} from "@legion-builder/types/settings";

export interface AppSettingPayload {
  name: AppSettingType;
  value: string;
}

export interface ColorModePayload extends AppSettingPayload {
  name: "colorMode";
  value: ColorMode;
}

export type State = {
  settings: AppSettings;
};

export const createSettings = ({colorMode = "system"}: Partial<AppSettings> = {}) => ({
  colorMode,
});
