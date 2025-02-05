import {AppSettingType, ColorMode} from "@legion-builder/types/settings";
import {type State} from "./App.types";

const getSettings = (state: State) => state.settings;

const getSetting = (state: State, name: AppSettingType) => getSettings(state)[name];

export const getThemeMode = (state: State): ColorMode => getSetting(state, "colorMode");
