import {SimplePaletteColorOptions} from "@mui/material";

export interface CardImageConfig {
  width: number;
  height: number;
}

export interface CardImageDerivativeConfig {
  small: number;
  medium: number;
  large: number;
  huge: number;
}

export type ImageSize = keyof CardImageDerivativeConfig;
export interface CardConfig {
  image: {
    portrait: CardImageConfig;
    landscape: CardImageConfig;
    derivative: CardImageDerivativeConfig;
  };
}

export interface PageConfig {
  hero: {
    /**
     * Background color of page hero.
     */
    bgColor: SimplePaletteColorOptions;
    /**
     * Background image for page hero.
     */
    bgImage?: string;
  };
  header: {
    /**
     * Page headers max-height.
     */
    maxHeight: number;
  };
  socialMedia: {
    discord?: string;
    facebook?: string;
    instagram?: string;
    bluesky?: string;
    reddit?: string;
    patreon?: string;
    mastodon?: string;
    threads?: string;
    twitter?: string;
    twitch?: string;
  };
  assets: {
    playerCardsUrl?: string;
    skirmishRulebookUrl?: string;
    battleCardsUrl?: string;
    cardsUrl?: string;
  };
}
