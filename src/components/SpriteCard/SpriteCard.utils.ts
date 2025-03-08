import {
  SpriteCard,
  SpriteId,
  SpriteImage,
  SpriteCardOptions,
  SpriteFileConfig,
  SpriteCardTemplate,
  SpriteSize,
  PositionFN,
} from "./SpriteCard.types";

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

export const createSpriteCardOptions = ({
  canvasHeight = PLAYER_CARDS_FILE_CONFIG.canvas.height,
  canvasWidth = PLAYER_CARDS_FILE_CONFIG.canvas.width,
  imageHeight = PLAYER_CARDS_FILE_CONFIG.unit.height,
  imageWidth = PLAYER_CARDS_FILE_CONFIG.unit.width,
  scale = 1,
}: Partial<SpriteCardOptions> = {}): SpriteCardOptions => ({
  canvasHeight,
  canvasWidth,
  imageHeight,
  imageWidth,
  scale,
});

export class SpriteTemplate implements SpriteCardTemplate {
  private canvas: SpriteSize;
  private image: SpriteSize;
  readonly scale: number;

  readonly getPositionX: PositionFN;
  readonly getPositionY: PositionFN;

  constructor({
    canvas,
    image,
    scale = 1,
    getPositionX,
    getPositionY,
  }: {
    canvas: SpriteSize;
    image: SpriteSize;
    scale?: number;
    getPositionX: PositionFN;
    getPositionY: PositionFN;
  }) {
    this.canvas = canvas;
    this.image = image;
    this.scale = scale;
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
}

export const PLAYER_CARDS_UNIT_TEMPLATE = new SpriteTemplate({
  canvas: PLAYER_CARDS_FILE_CONFIG.canvas,
  image: PLAYER_CARDS_FILE_CONFIG.unit,
  scale: 1,
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
  scale: 1,
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
  scale: 1,
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
