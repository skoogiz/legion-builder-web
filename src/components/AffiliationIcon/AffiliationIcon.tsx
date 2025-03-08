import {
  BlackSunIcon,
  EmpireIcon,
  EwoksIcon,
  MaulLoyalistsIcon,
  MercenariesIcon,
  PykesIcon,
  RaidersIcon,
  RebelsIcon,
  RepublicIcon,
  RoguesIcon,
  SeperatistsIcon,
} from "../Icons";
import {SvgIconProps} from "../Icons/SvgIcon";

type Props = {
  unit: {
    affiliation?: string;
    faction: string;
  };
} & SvgIconProps;

export function AffiliationIcon({unit, ...props}: Props) {
  if (unit.affiliation) {
    switch (unit.affiliation) {
      case "The Pyke Syndicate":
        return <PykesIcon {...props} />;
      case "Black Sun":
        return <BlackSunIcon {...props} />;
      case "Maul Loyalists":
        return <MaulLoyalistsIcon {...props} />;
      case "Raiders":
        return <RaidersIcon {...props} />;
      case "Rogues":
        return <RoguesIcon {...props} />;
      case "Ewoks":
        return <EwoksIcon {...props} />;
    }
  }

  switch (unit.faction) {
    case "rebels":
      return <RebelsIcon {...props} />;
    case "empire":
      return <EmpireIcon {...props} />;
    case "republic":
      return <RepublicIcon {...props} />;
    case "separatists":
      return <SeperatistsIcon {...props} />;
    case "mercenaries":
      return <MercenariesIcon {...props} />;
  }

  return null;
}
