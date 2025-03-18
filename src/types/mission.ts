import {BattleCard, ObjectiveCard} from "./cards";

export type RoundNumber = 1 | 2 | 3 | 4 | 5;

export interface Mission {
  objective: ObjectiveCard;
  secondObjective: BattleCard;
}

export interface Player {
  name: string;
  faction: string;
  battleForce?: string;
  victoryPoints: number;
  advantage: BattleCard;
}

export interface SkirmishMission extends Mission {
  round: RoundNumber;
  players: Record<"red" | "blue", Player>;
}

export interface StandardMission {
  round: RoundNumber;
  players: Record<"red" | "blue", Player & Mission>;
}
