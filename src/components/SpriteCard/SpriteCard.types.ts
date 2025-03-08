export type SpriteId = `${number}_${number}_${number}`;

export interface SpriteImage {
  file: string;
  sprite: {x: number; y: number};
}

export type SpriteCard = {
  front: SpriteImage;
  back?: SpriteImage;
};

export type SpriteSize = {
  height: number;
  width: number;
};

export type SpriteCardOptions = {
  canvasHeight: number;
  canvasWidth: number;
  imageHeight: number;
  imageWidth: number;
  scale: number;
};

export interface SpriteCardProps {
  src: string;
  spriteX: number;
  spriteY: number;
  options?: Partial<SpriteCardOptions>;
}

export type SpriteCardType = "unit" | "command" | "item";

export type SpriteFileConfig = {
  canvas: SpriteSize;
} & Record<SpriteCardType, SpriteSize>;

export type PositionFN = (x: number) => string;
export interface SpriteCardTemplate extends SpriteCardOptions {
  getPositionX: PositionFN;
  getPositionY: PositionFN;
}

export interface SpriteCardTemplateProps {
  src: string;
  spriteX: number;
  spriteY: number;
  template: SpriteCardTemplate;
}
