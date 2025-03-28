import * as React from "react";
import {Typography, useTheme} from "@mui/material";
import {BattleCard, Card} from "@legion-builder/types/cards";
import {useMediaQuery} from "@react-hookz/web";
import {CardImage} from "@legion-builder/components/CardImage";
import {CardBody, CardContainer, CardHeader} from "./MissionCard.styles";
import {getTitle} from "./MissionCard.helpers";

function LegionCard({
  imageRef,
  landscape = false,
}: {
  imageRef: Card["imageRef"];
  landscape?: boolean;
}) {
  const theme = useTheme();
  const xxl = useMediaQuery(theme.breakpoints.up("xxl"));
  return (
    <CardImage
      type="battle"
      imageRef={imageRef}
      size={xxl ? "large" : "medium"}
      orientation={landscape ? "landscape" : undefined}
    />
  );
}

type Props = {
  type: string;
  children: React.ReactNode;
};

export function MissionCard({type, children}: Props) {
  return (
    <CardContainer type={type}>
      <CardHeader>
        <Typography
          variant="subtitle1"
          component="span"
          sx={(theme) => ({
            fontWeight: theme.typography.fontWeightBold,
            textTransform: "uppercase",
            color: theme.palette.common.white,
            letterSpacing: ".16em",
          })}
        >
          {getTitle(type)}
        </Typography>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
}

type MissionObjectiveCardProps = {
  card: BattleCard;
};

export function MissionObjectiveCard({card}: MissionObjectiveCardProps) {
  return (
    <MissionCard type={card.category}>
      <LegionCard imageRef={card.imageRef} />
    </MissionCard>
  );
}

export function SimpleCard({children}: Omit<Props, "type">) {
  return <CardBody>{children}</CardBody>;
}
