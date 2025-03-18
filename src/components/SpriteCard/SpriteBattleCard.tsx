import {SpriteCardTemplateProps} from "./SpriteCard.types";
import {SpriteCard} from "./SpriteCard";
import {BATTLE_CARDS_TEMPLATE} from "./SpriteCard.utils";

type Props = Omit<SpriteCardTemplateProps, "template"> & {
  template?: SpriteCardTemplateProps["template"];
};

export function SpriteBattleCard({
  src,
  spriteX,
  spriteY,
  template = BATTLE_CARDS_TEMPLATE,
}: Props) {
  return <SpriteCard src={src} spriteX={spriteX} spriteY={spriteY} template={template} />;
}
