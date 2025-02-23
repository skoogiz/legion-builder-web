import {ImageRef} from "@legion-builder/types/cards";

export const isSpriteImageRef = (imageRef?: ImageRef): boolean =>
  !!imageRef &&
  !(typeof imageRef === "string") &&
  imageRef?.front &&
  !!imageRef.front.sprite;
