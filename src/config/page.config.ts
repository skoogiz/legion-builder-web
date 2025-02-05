import {PageConfig} from "./config.types";

const defineHeaderConfig = ({
  maxHeight = 56,
}: Partial<PageConfig["header"]> = {}): PageConfig["header"] => ({
  maxHeight,
});

const defineHeroConfig = ({
  bgColor = {main: "#153448"},
  bgImage,
}: Partial<PageConfig["hero"]> = {}): PageConfig["hero"] => ({
  bgColor,
  bgImage,
});
const defineSocialMedia = ({
  bluesky,
  discord,
  facebook,
  instagram,
  reddit,
  patreon,
  mastodon,
  threads,
  twitter,
  twitch,
}: Partial<PageConfig["socialMedia"]> = {}): PageConfig["socialMedia"] => ({
  bluesky,
  discord,
  facebook,
  instagram,
  reddit,
  patreon,
  mastodon,
  threads,
  twitter,
  twitch,
});

const definePageConfig = ({
  header,
  hero,
  socialMedia,
}: Partial<PageConfig> = {}): PageConfig => ({
  header: defineHeaderConfig(header),
  hero: defineHeroConfig(hero),
  socialMedia: defineSocialMedia(socialMedia),
});

export {definePageConfig};
