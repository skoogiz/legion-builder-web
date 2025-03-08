import {SpriteCardTemplateProps} from "./SpriteCard.types";
import {TemplateSpriteCard} from "./SpriteCard";
import {PLAYER_CARDS_UNIT_TEMPLATE} from "./SpriteCard.utils";

type Props = Omit<SpriteCardTemplateProps, "template"> & {
  template?: SpriteCardTemplateProps["template"];
};

export function SpriteUnitCard({
  src,
  spriteX,
  spriteY,
  template = PLAYER_CARDS_UNIT_TEMPLATE,
}: Props) {
  return (
    <TemplateSpriteCard
      src={src}
      spriteX={spriteX}
      spriteY={spriteY}
      template={template}
    />
  );
}
