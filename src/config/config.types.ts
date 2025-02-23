import {SimplePaletteColorOptions} from "@mui/material";

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
  };
}
