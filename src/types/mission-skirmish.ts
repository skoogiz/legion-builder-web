import {mapImageRef} from "@legion-builder/utils/imageUtils";
import {BattleCard, ObjectiveCard} from "./cards";
import {Player, RoundNumber, SkirmishMission} from "./mission";
import {getRandom} from "@legion-builder/utils/randomUtils";

export class SkirmishMissionBoard implements SkirmishMission {
  private currnetObjective: ObjectiveCard;
  private currnetSecondObjective: BattleCard;
  private currentRound: 1 | 2 | 3 | 4 | 5;

  readonly players: Record<"red" | "blue", Player>;

  constructor({
    bluePlayer,
    redPlayer,
    objective,
    secondObjective,
    round = 1,
  }: {
    bluePlayer: Player;
    redPlayer: Player;
    objective: ObjectiveCard;
    secondObjective: BattleCard;
    round?: RoundNumber;
  }) {
    this.players = {
      blue: bluePlayer,
      red: redPlayer,
    };
    this.currnetObjective = objective;
    this.currnetSecondObjective = secondObjective;
    this.currentRound = round;
  }

  get objective() {
    return this.currnetObjective;
  }

  get secondObjective() {
    return this.currnetSecondObjective;
  }

  get objectiveImage() {
    return this.objective.imageRef ? mapImageRef(this.objective.imageRef) : null;
  }

  get objectiveMapImage() {
    return this.objective.map.imageRef ? mapImageRef(this.objective.map.imageRef) : null;
  }
  get secondObjectiveImage() {
    return this.secondObjective.imageRef
      ? mapImageRef(this.secondObjective.imageRef)
      : null;
  }

  get round() {
    return this.currentRound;
  }

  static createPlayer({
    name,
    faction,
    battleForce,
    victoryPoints = 0,
    advantages,
  }: {
    name: string;
    faction: string;
    battleForce?: string;
    victoryPoints?: number;
    advantages: BattleCard[];
  }): Player {
    if (advantages.length === 0) {
      throw new Error("Player must have at least one advantage");
    }
    const advantage = getRandom(advantages);
    return {
      name,
      faction,
      battleForce,
      victoryPoints,
      advantage,
    };
  }

  static createMission({
    bluePlayer,
    redPlayer,
    objectives,
    secondObjectives,
    advantages,
    sharedAdvantages = true,
  }: {
    bluePlayer: Omit<Player, "advantage" | "victoryPoints">;
    redPlayer: Omit<Player, "advantage" | "victoryPoints">;
    objectives: ObjectiveCard[];
    secondObjectives: BattleCard[];
    advantages: BattleCard[];
    sharedAdvantages?: boolean;
  }): SkirmishMissionBoard {
    let blue, red;
    if (sharedAdvantages) {
      const advantage = getRandom(advantages);
      blue = {
        ...bluePlayer,
        advantage,
        victoryPoints: 0,
      };
      red = {
        ...redPlayer,
        advantage: getRandom(advantages.filter((a) => a !== advantage)),
        victoryPoints: 0,
      };
    } else {
      blue = {
        ...bluePlayer,
        victoryPoints: 0,
        advantage: getRandom(advantages),
      };
      red = {
        ...redPlayer,
        victoryPoints: 0,
        advantage: getRandom(advantages),
      };
    }
    return new SkirmishMissionBoard({
      bluePlayer: blue,
      redPlayer: red,
      objective: getRandom(objectives),
      secondObjective: getRandom(secondObjectives),
    });
  }
}
