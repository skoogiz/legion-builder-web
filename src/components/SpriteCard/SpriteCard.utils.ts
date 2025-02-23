import {
  SpriteCard,
  SpriteId,
  SpriteImage,
  SpriteCardOptions,
  SpriteFileConfig,
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
    height: 228,
    width: 325,
  },
  item: {
    height: 228,
    width: 325,
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
