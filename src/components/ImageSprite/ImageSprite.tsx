import * as React from "react";
import {useAppContext} from "@legion-builder/context";

interface Props {
  src: string;
  spriteX: string;
  spriteY: string;
  canvasHeight?: number;
  canvasWidth?: number;
  imageHeight?: number;
  imageWidth?: number;
  orientation?: "portrait" | "landscape";
  style?: React.CSSProperties;
}

export const ImageSprite = React.memo(function ({
  src,
  spriteX,
  spriteY,
  canvasHeight = 1024,
  canvasWidth = 791,
  imageHeight,
  imageWidth,
  orientation = "landscape",
  style = {},
}: Props) {
  const {
    config: {
      cardConfig: {image},
    },
  } = useAppContext();

  const height =
    imageHeight ??
    (orientation === "landscape" ? image.landscape.height : image.portrait.height);
  const width =
    imageWidth ??
    (orientation === "landscape" ? image.landscape.width : image.portrait.width);

  return (
    <div
      style={{
        background: `url(${src})`,
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        backgroundSize: `${canvasWidth}px ${canvasHeight}px`,
        height: `${height}px`,
        width: `${width}px`,
        backgroundPositionX: spriteX,
        backgroundPositionY: spriteY,
        ...style,
      }}
    ></div>
  );
});
