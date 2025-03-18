import {ImageSize} from "@legion-builder/config";
import {Card} from "@legion-builder/types/cards";
import {isSpriteImageRef, mapImageRef} from "@legion-builder/utils/imageUtils";
import {SpriteCard} from "../SpriteCard/SpriteCard";
import {useConfig} from "@legion-builder/hooks/useConfig";
import {getTemplate} from "../SpriteCard/SpriteCard.utils";

type Props = {
  type: Card["__typename"];
  imageRef: Card["imageRef"];
  size?: ImageSize;
};

export function CardImage({type, imageRef, size = "medium"}: Props) {
  const {resolveImageSrc, resolveSpriteSrc, getSize} = useConfig();

  if (!imageRef) return null;

  const imgRef = mapImageRef(imageRef);

  if (isSpriteImageRef(imageRef) && imgRef.front.sprite) {
    const [x, y] = imgRef.front.sprite.split(":");

    return (
      <SpriteCard
        src={resolveSpriteSrc(imgRef.front.file)}
        spriteX={+x}
        spriteY={+y}
        size={size}
        template={getTemplate(imgRef.front.file, type)}
      />
    );
  }

  const {height, width} = getSize({size, type});

  return (
    <img
      src={resolveImageSrc(imgRef.front.file, type)}
      alt={`${type}-card-image`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    />
  );
}
