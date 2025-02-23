import {SpriteCardProps} from "./SpriteCard.types";
import {SpriteCard} from "./SpriteCard";
import {createSpriteCardOptions, PLAYER_CARDS_FILE_CONFIG} from "./SpriteCard.utils";

const getPositionX = (x: number) => {
  switch (x) {
    case 2:
      return "-396px";
    default:
      return "-70px";
  }
};

const getPositionY = (y: number) => {
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
};

export function SpriteUnitCard({src, spriteX, spriteY, options = {}}: SpriteCardProps) {
  return (
    <SpriteCard
      src={src}
      spriteX={spriteX}
      spriteY={spriteY}
      getPositionX={getPositionX}
      getPositionY={getPositionY}
      options={createSpriteCardOptions({
        canvasHeight: PLAYER_CARDS_FILE_CONFIG.canvas.height,
        canvasWidth: PLAYER_CARDS_FILE_CONFIG.canvas.width,
        imageHeight: PLAYER_CARDS_FILE_CONFIG.unit.height,
        imageWidth: PLAYER_CARDS_FILE_CONFIG.unit.width,
        ...options,
      })}
    />
  );
}
