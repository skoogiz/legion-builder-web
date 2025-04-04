import {SpriteCardTemplateProps} from "./SpriteCard.types";
import {SpriteCard} from "./SpriteCard";
import {PLAYER_CARDS_COMMAND_TEMPLATE} from "./SpriteCard.utils";

type Props = Omit<SpriteCardTemplateProps, "template"> & {
  template?: SpriteCardTemplateProps["template"];
};

export function SpriteCommandCard({
  src,
  spriteX,
  spriteY,
  template = PLAYER_CARDS_COMMAND_TEMPLATE,
}: Props) {
  return <SpriteCard src={src} spriteX={spriteX} spriteY={spriteY} template={template} />;
}
