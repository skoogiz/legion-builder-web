import {AppSettings} from "@legion-builder/types/settings";
import {ActionType, type Action} from "./App.actions";
import {type State} from "./App.types";

const init = (state: State, settings: AppSettings) => ({
  ...state,
  settings,
});

const updateSettings = (state: State, settings: Partial<AppSettings>) => ({
  ...state,
  settings: {
    ...state.settings,
    ...settings,
  },
});

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INIT:
      return init(state, action.payload);
    case ActionType.UPDATE_SETTINGS:
      return updateSettings(state, action.payload);
    default:
      return state;
  }
};
