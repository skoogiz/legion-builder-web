export type SpriteImageRef = {
  front: {file: string; sprite?: string};
  back?: {file: string; sprite?: string};
};

export type ImageRef = string | SpriteImageRef;

interface BaseCard {
  __typename: string;

  /**
   * Name of the card
   */
  name: string;

  identifiers: {
    /**
     * Cards full name containting both name and subtitle if present.
     *
     * Name format for units "<NAME>: <SUBTITLE>". If subtitle is not present, then it is just "<NAME>"
     */
    name: string;
    /**
     * Unique identifier for the card used by Legion HQ, only exists for cards before 2.6.0
     */
    legionhqId?: string;
    /**
     * type | full name | identifier
     *
     * Identifiers by card type:
     *  - unit: <faction>
     *
     * e.g. "unit" | "Luke Skywalker" | "rebels"
     */
    tni: string;
  };

  /**
   * Special rules keywords
   */
  keywords?: string[]; // e.g. ["Jump", "Charge", "Deflect", "Immune", "Impact", "Pierce"];

  //--> imageName: "Luke Skywalker.jpeg";
  /**
   * Image reference for the card
   *
   * If string, then it is the image file name.
   *
   * If object, then it is the image file name and sprite coordinates if present.
   */
  imageRef?: ImageRef;

  history?: {
    /**
     * Date of the change
     */
    date: string;
    /**
     * Description of the change
     */
    text: string;
  }[];
}

export type Legalities = {
  standard?: string;
  skirmish?: string;
};

type Restriction =
  | {
      faction: string;
    }
  | {
      battleForce: string;
    }
  | {
      commander: string;
    }
  | {
      name: string;
    }
  | {
      subtitle: string;
    }
  | {
      unitRank: UnitRank;
    }
  | {
      unitType: UnitType;
    }
  | {
      upgrade: UpgradeType;
    }
  | {
      forceAlignment: "light side" | "dark side";
    }
  | {
      affiliation: string;
    };

type Restrictions =
  | Restriction
  | ["NOT", Restrictions]
  | ["AND" | "OR", Restrictions, Restrictions]
  | Restrictions[];

export interface LegacyBattleCard extends BaseCard {
  //--> cardType
  __typename: "battle";
  //--> cardName
  /**
   * The battle card’s type.
   */
  //--> cardSubtype
  category: string;

  legalities?: Legalities;
}

// export interface Restrictions {
//   /**
//    * The affiliation that can use this card
//    */
//   affiliation?: string;
//   /**
//    * The commander that can use this card
//    */
//   commander?: string;
//   /**
//    * The faction that can use this card
//    */
//   factions?: string;
//   /**
//    * The unit that can use this card
//    */
//   unit?: string;
//   /**
//    * The battleForce that can use this card
//    */
//   battleForce?: string;
// }

export interface CommandCard extends BaseCard {
  __typename: "command";
  /**
   * The number of pips this Command Card has. Pips are used in Army Building and
   * when determining player priority
   */
  pips: number;
  restrictions?: Restrictions;
  orders?: string[];
  effect?: string | string[];
  weapons?: string[]; // e.g. ["A-280 Blaster Rifle", "Grappling Hooks"];
}

export interface FlawCard extends BaseCard {
  __typename: "flaw";
  restrictions?: Restrictions;
}

interface UnitMetaData {
  prevCost?: number;
  displayName?: string;
  contingencies?: number;
  entourage?: {
    name: string; // e.g. trooper name "Imperial Royal Guards";
    type: string; // e.g. unit type "special";
  };
  detachment?: string; // identifiers.name
  counterpartId?: string; // identifiers.name
  flaw?: string; // flaw name
  flexResponse?: number;
  equip?: string[]; // mandatory upgrade choices e.g. ["DLT-19 Stormtrooper", "Z-6 Trooper"];
  specialIssue?: string; // Unit only available to certain battleforces
}

type Trooper =
  | "trooper"
  | "clone trooper"
  | "creature trooper"
  | "droid trooper"
  | "emplacement trooper"
  | "wookiee  trooper";

type Vehicle = "repulsor vehicle" | "ground vehicle";

export type UnitType = Trooper | Vehicle;

interface UnitBase extends BaseCard {
  /**
   * The unit’s subtitle, if it has one.
   *
   * e.g. commander Luke Skywalker as the subtitle "Hero of the Rebellion"
   */
  subtitle?: string;
  faction: string; // "rebels" | "empire" | "republic" | "separatists" | "mercenaries";
  points: number;
  numberOfMiniatures: number;
  //--> cardSubtype: "trooper";
  unitType: UnitType;
  upgradeBar?: string[]; // e.g. ["force", "force", "gear"];
  //--> wounds: 6;
  woundThreshold: number;

  isUnique?: boolean;

  //--> subfaction: string;
  affiliation: string; //  "Black Sun" | "The Pyke Syndicate" | "Raiders" | "Rogues" | "Maul Loyalists" | "Ewoks"

  //--> affiliations
  merceneary?: string[]; // What factions can hire this unit

  weapons?: string[]; // e.g. ["A-280 Blaster Rifle", "Grappling Hooks"];
  // MISC
  meta?: UnitMetaData;
}

export type UnitRank =
  | "commander"
  | "operative"
  | "corps"
  | "special"
  | "support"
  | "heavy";

export type UnitSpeed = 0 | 1 | 2 | 3;

export type AttackDice = "red" | "black" | "white";

export type DefenceDice = "red" | "white";

export type AttackSurge = "hit" | "critical" | null;

export type DefenceSurge = "block" | null;

export interface UnitCard extends UnitBase {
  __typename: "unit";
  unitRank: UnitRank;
  resilience?: number;
  courage?: number | "-";
  speed: UnitSpeed;
  defense: DefenceDice;
  surgeChart?: [AttackSurge, DefenceSurge];
}

export interface CounterpartCard extends UnitBase {
  __typename: "counterpart";
}

export type UpgradeType =
  | "heavy weapon"
  | "personnel"
  | "force"
  | "command"
  | "hardpoint"
  | "gear"
  | "grenades"
  | "programming"
  | "comms"
  | "pilot"
  | "training"
  | "generator"
  | "armament"
  | "crew"
  | "ordnance"
  | "squad leader";

export interface UpgradeCard extends BaseCard {
  __typename: "upgrade";
  subtitle?: string;
  upgradeType: UpgradeType;
  isUnique?: boolean;
  woundThreshold?: number;
  limitation?: "expend" | "exhaust";
  effect?: string | string[];
  weapons?: string[]; // e.g. ["A-280 Blaster Rifle", "Grappling Hooks"];
  restrictions?: Restrictions;
  meta?: UnitMetaData & {
    additionalUpgradeSlots?: string[];
  };
}
