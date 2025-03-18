import {Card} from "@legion-builder/types/cards";
import {
  SpriteCard,
  SpriteId,
  SpriteImage,
  SpriteFileConfig,
  SpriteCardTemplate,
  SpriteSize,
  PositionFN,
} from "./SpriteCard.types";
import {CardImageDerivativeConfig, ImageSize} from "@legion-builder/config";

// export const getSrc = (page: number) =>
//   `/data/2.6.0/SWQ_PlayerCards-4/page_${`${page}`.padStart(2, "0")}.png`;

export const getSrc = (page: number) =>
  `/data/2.6.0/SWQ_PlayerCards_JanuaryUpdate/SWQ_PlayerCards_JanuaryUpdate_${page}.png`;

// const SPRITE_ID = /^\d+_\d+_\d+$/;

const UNIT_SPRITE_ID = /^\d+_[1-2]+_[1-4]+(:\d+_[1-2]+_[1-4]+)?$/;

/**
 * Only use on sprite ids.
 *
 * @param spritsId Format: <page>_<sprite_x>_<sprite_y>
 * @returns
 */
const parseSpriteId = (spritsId: SpriteId): SpriteImage => {
  const [page, x, y] = spritsId.split("_");
  return {
    file: getSrc(+page),
    sprite: {x: +x, y: +y},
  };
};

/**
 * Parse unit card id
 *
 * Sample: <FRONT_ID>:<BACK_ID> with the following formula <page>_<sprite_x>_<sprite_y>:<page>_<sprite_x>_<sprite_y>
 *
 */
export const parseUnitSpriteId = (unitSpriteId: string): SpriteCard | null => {
  if (!UNIT_SPRITE_ID.test(unitSpriteId)) return null;

  const cardIds = unitSpriteId.split(":") as SpriteId[];

  return {
    front: parseSpriteId(cardIds[0]),
    back: cardIds.length > 1 ? parseSpriteId(cardIds[1]) : undefined,
  };
};

export const PLAYER_CARDS_FILE_CONFIG: SpriteFileConfig = {
  canvas: {
    height: 1024,
    width: 791,
  },
  command: {
    height: 324,
    width: 228,
  },
  item: {
    height: 324,
    width: 228,
  },
  unit: {
    height: 228,
    width: 325,
  },
};

export const SKIRMISH_CARDS_FILE_CONFIG = {
  canvas: {
    height: 1024,
    width: 791,
  },
  battle: {
    height: 324,
    width: 229,
  },
};

export const BATTLE_CARDS_FILE_CONFIG = {
  canvas: {
    height: 1024,
    width: 791,
  },
  battle: {
    height: 324,
    width: 229,
  },
};

export class SpriteTemplate implements SpriteCardTemplate {
  private canvas: SpriteSize;
  private image: SpriteSize;

  readonly getPositionX: PositionFN;
  readonly getPositionY: PositionFN;

  constructor({
    canvas,
    image,
    getPositionX,
    getPositionY,
  }: {
    canvas: SpriteSize;
    image: SpriteSize;
    getPositionX: PositionFN;
    getPositionY: PositionFN;
  }) {
    this.canvas = canvas;
    this.image = image;
    this.getPositionX = getPositionX;
    this.getPositionY = getPositionY;
  }

  get canvasHeight() {
    return this.canvas.height;
  }

  get canvasWidth() {
    return this.canvas.width;
  }

  get imageHeight() {
    return this.image.height;
  }

  get imageWidth() {
    return this.image.width;
  }

  getDerivatives(
    derivative: CardImageDerivativeConfig,
  ): Record<ImageSize, SpriteCardTemplate> {
    return (Object.keys(derivative) as ImageSize[]).reduce(
      (acc, key) => {
        const scale = derivative[key];
        return {
          ...acc,
          [key]: {
            canvasHeight: Math.floor(this.canvasHeight * scale),
            canvasWidth: Math.floor(this.canvasWidth * scale),
            imageHeight: Math.floor(this.imageHeight * scale),
            imageWidth: Math.floor(this.imageWidth * scale),
            getPositionX: (x: number) =>
              scale === 1
                ? this.getPositionX(x)
                : `calc(${this.getPositionX(x)} * ${scale})`,
            getPositionY: (y: number) =>
              scale === 1
                ? this.getPositionY(y)
                : `calc(${this.getPositionY(y)} * ${scale})`,
          },
        };
      },
      {} as Record<ImageSize, SpriteCardTemplate>,
    );
  }
}

export const PLAYER_CARDS_UNIT_TEMPLATE = new SpriteTemplate({
  canvas: PLAYER_CARDS_FILE_CONFIG.canvas,
  image: PLAYER_CARDS_FILE_CONFIG.unit,
  getPositionX: (x) => {
    switch (x) {
      case 2:
        return "-396px";
      default:
        return "-70px";
    }
  },
  getPositionY: (y) => {
    switch (y) {
      case 4:
        return "-736px";
      case 3:
        return "-506px";
      case 2:
        return "-277px";
      default:
        return "-47px";
    }
  },
});

export const PLAYER_CARDS_COMMAND_TEMPLATE = new SpriteTemplate({
  canvas: PLAYER_CARDS_FILE_CONFIG.canvas,
  image: PLAYER_CARDS_FILE_CONFIG.command,
  getPositionX: (x) => {
    switch (x) {
      case 3:
        return "-511px";
      case 2:
        return "-281px";
      default:
        return "-52px";
    }
  },
  getPositionY: (y) => {
    switch (y) {
      case 2:
        return "-570px";
      default:
        return "-244px";
    }
  },
});

export const PLAYER_CARDS_ITEM_TEMPLATE = new SpriteTemplate({
  canvas: PLAYER_CARDS_FILE_CONFIG.canvas,
  image: PLAYER_CARDS_FILE_CONFIG.item,
  getPositionX: (x) => {
    switch (x) {
      case 3:
        return "-511px";
      case 2:
        return "-281px";
      default:
        return "-52px";
    }
  },
  getPositionY: (y) => {
    switch (y) {
      case 2:
        return "-540px";
      default:
        return "-214px";
    }
  },
});

export const SKIRMISH_BATTLE_CARDS_TEMPLATE = new SpriteTemplate({
  canvas: SKIRMISH_CARDS_FILE_CONFIG.canvas,
  image: SKIRMISH_CARDS_FILE_CONFIG.battle,
  getPositionX: (x) => {
    switch (x) {
      case 3:
        return "-511px";
      case 2:
        return "-281px";
      default:
        return "-51px";
    }
  },
  getPositionY: (y) => {
    switch (y) {
      case 2:
        return "-538px";
      default:
        return "-212px";
    }
  },
});

export const BATTLE_CARDS_TEMPLATE = new SpriteTemplate({
  canvas: BATTLE_CARDS_FILE_CONFIG.canvas,
  image: BATTLE_CARDS_FILE_CONFIG.battle,
  getPositionX: (x) => {
    switch (x) {
      case 3:
        return "-511px";
      case 2:
        return "-281px";
      default:
        return "-51px";
    }
  },
  getPositionY: (y) => {
    switch (y) {
      case 2:
        return "-550px";
      default:
        return "-224px";
    }
  },
});

export const getTemplate = (file: string, type: Card["__typename"]): SpriteTemplate => {
  if (file.startsWith("SWQ_SkirmishRulebook")) return SKIRMISH_BATTLE_CARDS_TEMPLATE;
  if (file.startsWith("SWQ_BattleCards")) return BATTLE_CARDS_TEMPLATE;

  // Default into SWQ_PlayerCards
  switch (type) {
    case "command":
      return PLAYER_CARDS_COMMAND_TEMPLATE;
    case "upgrade":
      return PLAYER_CARDS_ITEM_TEMPLATE;
    case "unit":
    case "counterpart":
    default:
      return PLAYER_CARDS_UNIT_TEMPLATE;
  }
};
