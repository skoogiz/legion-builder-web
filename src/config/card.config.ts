import {CardConfig, CardImageDerivativeConfig} from "./config.types";

const CARD_IMAGE_DERIVATIVE: CardImageDerivativeConfig = {
  small: 0.75,
  medium: 1,
  large: 1.4,
  huge: 2,
};

const defineCardConfig = ({
  portrait = {width: 228, height: 325},
  landscape = {width: 325, height: 228},
  derivative = CARD_IMAGE_DERIVATIVE,
}: Partial<CardConfig["image"]> = {}): CardConfig => ({
  image: {
    portrait,
    landscape,
    derivative,
  },
});

export {CARD_IMAGE_DERIVATIVE, defineCardConfig};
