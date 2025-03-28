import {ImageSize} from "@legion-builder/config";
import {useAppContext} from "@legion-builder/context";
import {Card} from "@legion-builder/types/cards";

export const useConfig = () => {
  const {
    config: {pageConfig, cardConfig},
  } = useAppContext();

  const resolveImageSrc = (file: string, type: Card["__typename"]) =>
    `${pageConfig.assets.cardsUrl}/${type}/${file}`;

  const resolveSpriteSrc = (file: string) => {
    if (file.startsWith("SWQ_SkirmishRulebook"))
      return `${pageConfig.assets.skirmishRulebookUrl}/${file}`;
    if (file.startsWith("SWQ_PlayerCards"))
      return `${pageConfig.assets.playerCardsUrl}/${file}`;
    if (file.startsWith("SWQ_BattleCards"))
      return `${pageConfig.assets.battleCardsUrl}/${file}`;
    return file;
  };

  const getSize = ({
    size,
    type,
    // category,
    orientation,
  }: {
    size: ImageSize;
    type: Card["__typename"];
    // category?: string;
    orientation?: "portrait" | "landscape";
  }) => {
    const scale = cardConfig.image.derivative[size];

    if (orientation) {
      switch (orientation) {
        case "portrait":
          return {
            height: Math.floor(cardConfig.image.portrait.height * scale),
            width: Math.floor(cardConfig.image.portrait.width * scale),
          };
        default:
          return {
            height: Math.floor(cardConfig.image.landscape.height * scale),
            width: Math.floor(cardConfig.image.landscape.width * scale),
          };
      }
    }

    switch (type) {
      case "battle":
        return {
          height: Math.floor(cardConfig.image.portrait.height * scale),
          width: Math.floor(cardConfig.image.portrait.width * scale),
        };
      case "command":
      case "flaw":
      case "upgrade":
        return {
          height: Math.floor(cardConfig.image.portrait.height * scale),
          width: Math.floor(cardConfig.image.portrait.width * scale),
        };
      default:
        return {
          height: Math.floor(cardConfig.image.landscape.height * scale),
          width: Math.floor(cardConfig.image.landscape.width * scale),
        };
    }
  };

  return {resolveImageSrc, resolveSpriteSrc, getSize};
};
