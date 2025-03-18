import * as React from "react";
import {isEqual} from "lodash";
import {PaletteMode} from "@mui/material";
import {useSystemColorScheme} from "@legion-builder/hooks/useSystemColorScheme";
import {useLocalStorageValue} from "@react-hookz/web";
import {AppSettings, ColorMode} from "@legion-builder/types/settings";
import {LocalStorageKey} from "@legion-builder/types/storage";
import {CardConfig, PageConfig} from "@legion-builder/config";
import {createSettings} from "./App.types";
import {reducer} from "./App.reducer";
import {getActions} from "./App.actions";

export type AppContextValue = {
  mode: PaletteMode;
  settings: AppSettings;
  config: {pageConfig: PageConfig; cardConfig: CardConfig};
  setColorMode: (mode: ColorMode) => void;
  setSettings: (settings: Partial<AppSettings>) => void;
};

const AppContext = React.createContext<AppContextValue | undefined>(undefined);

type Props = {
  pageConfig: PageConfig;
  cardConfig: CardConfig;
  children: React.ReactNode;
};

const defaultSettings = createSettings();

function AppContextProvider({pageConfig, cardConfig, children}: Props) {
  const systemColorScheme = useSystemColorScheme();
  const {value: storedSettings, set: persistSettings} = useLocalStorageValue<
    AppSettings,
    AppSettings,
    true
  >(LocalStorageKey.SETTINGS, {defaultValue: defaultSettings});

  const [state, dispatch] = React.useReducer(reducer, {
    settings: {...defaultSettings, ...storedSettings},
  });

  const {updateSettings} = getActions(dispatch);

  const [mode, setPaletteMode] = React.useState<PaletteMode>(
    state.settings.colorMode === "system" ? systemColorScheme : state.settings.colorMode,
  );

  const setSettings = (settings: Partial<AppSettings>) => {
    updateSettings(settings);
  };

  const setColorMode = (colorMode: ColorMode) => {
    if (colorMode !== state.settings.colorMode) {
      updateSettings({colorMode});
    }
  };

  React.useEffect(() => {
    if (state.settings.colorMode !== "system" && state.settings.colorMode !== mode) {
      setPaletteMode(state.settings.colorMode);
    }
    if (state.settings.colorMode === "system" && systemColorScheme !== mode) {
      setPaletteMode(systemColorScheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemColorScheme, state.settings.colorMode]);

  React.useEffect(() => {
    if (!isEqual(storedSettings, state.settings)) {
      persistSettings(state.settings);
    }
  }, [state.settings]);

  React.useEffect(() => {
    if (!isEqual(storedSettings, state.settings)) {
      updateSettings(storedSettings);
    }
  }, [storedSettings]);

  const value = React.useMemo(
    () => ({
      mode,
      settings: state.settings,
      config: {pageConfig, cardConfig},
    }),
    [mode, state.settings, pageConfig, cardConfig],
  );

  return (
    <AppContext.Provider value={{...value, setColorMode, setSettings}}>
      {children}
    </AppContext.Provider>
  );
}

export {AppContext, AppContextProvider};
