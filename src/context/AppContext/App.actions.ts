import * as React from "react";
import {AppSettings} from "@legion-builder/types/settings";

export enum ActionType {
  INIT = "@app/INIT",
  UPDATE_SETTINGS = "@app/UPDATE_SETTINGS",
}

export type Action =
  | {
      type: ActionType.INIT;
      payload: AppSettings;
    }
  | {
      type: ActionType.UPDATE_SETTINGS;
      payload: Partial<AppSettings>;
    };

export const getActions = (dispatch: React.Dispatch<Action>) => ({
  init: (settings: AppSettings) =>
    dispatch({
      type: ActionType.INIT,
      payload: settings,
    }),
  updateSettings: (settings: Partial<AppSettings>) =>
    dispatch({
      type: ActionType.UPDATE_SETTINGS,
      payload: settings,
    }),
});
