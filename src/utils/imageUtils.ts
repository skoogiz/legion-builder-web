import {BaseCard, ImageFile, ImageRef} from "@legion-builder/types/cards";

export const isSpriteImageRef = (imageRef: BaseCard["imageRef"]): boolean => {
  if (!imageRef) return false;
  if (typeof imageRef === "string") return false;
  if (Array.isArray(imageRef)) {
    return imageRef.some((ref) => ref.sprite);
  } else {
    return Boolean(imageRef.sprite);
  }
};

export const mapImageRef = (
  imageRef: ImageRef | ImageFile[],
): {front: ImageFile; back?: ImageFile} => {
  if (typeof imageRef === "string") {
    return {front: {file: imageRef}};
  }
  if (Array.isArray(imageRef)) {
    const [front, back] = imageRef;
    return {
      front,
      back,
    };
  }
  return {
    front: imageRef,
  };
};
