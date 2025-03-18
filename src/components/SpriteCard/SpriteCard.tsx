import * as React from "react";
import {SpriteCardTemplateProps} from "./SpriteCard.types";
import {useAppContext} from "@legion-builder/context";
import {ImageSprite} from "../ImageSprite";

export const SpriteCard = React.memo(function ({
  src,
  spriteX,
  spriteY,
  template,
  size = "medium",
}: SpriteCardTemplateProps) {
  const {
    config: {cardConfig},
  } = useAppContext();

  const {canvasHeight, canvasWidth, imageHeight, imageWidth, getPositionX, getPositionY} =
    template.getDerivatives(cardConfig.image.derivative)[size];

  return (
    <ImageSprite
      src={src}
      spriteX={getPositionX(spriteX)}
      spriteY={getPositionY(spriteY)}
      canvasHeight={canvasHeight}
      canvasWidth={canvasWidth}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
    />
  );
});
