import React from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
  styled,
  Typography,
  Divider,
} from "@mui/material";
import {useAppContext} from "@legion-builder/context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJediOrder, faSith} from "@fortawesome/free-brands-svg-icons";
import {faGear} from "@fortawesome/free-solid-svg-icons";
import {ModeSwitch} from "@legion-builder/components/ModeSwitch";
import {ColorMode} from "@legion-builder/types/settings";
import {
  EwoksIcon,
  RebelsIcon,
  PykesIcon,
  RepublicIcon,
  SeperatistsIcon,
  RoguesIcon,
  RaidersIcon,
  MercenariesIcon,
  MaulLoyalistsIcon,
  EmpireIcon,
  BlackSunIcon,
} from "@legion-builder/components/Icons";

const ModeButton = styled(ToggleButton)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  // paddingInline: theme.spacing(4),
}));

export function SettingsPage() {
  const {
    settings: {colorMode},
    setColorMode,
  } = useAppContext();

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: ColorMode) => {
    console.log("CHANGE COLOR MODE", {value});
    setColorMode(value);
  };

  return (
    <div>
      <Typography variant="h1">Settings</Typography>
      <Divider />
      <div>
        <Typography variant="overline">Mode</Typography>
        <ToggleButtonGroup
          color="primary"
          value={colorMode}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ModeButton value="light">
            <FontAwesomeIcon icon={faJediOrder} size="lg" /> Light
          </ModeButton>
          <ModeButton value="system">
            <FontAwesomeIcon icon={faGear} size="lg" /> System
          </ModeButton>
          <ModeButton value="dark">
            <FontAwesomeIcon icon={faSith} size="lg" /> Dark
          </ModeButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <ModeSwitch />
      </div>
      <div>
        <div>
          <BlackSunIcon color="error" size="small" />
          <BlackSunIcon color="error" size="medium" />
          <BlackSunIcon color="error" size="large" />
          <BlackSunIcon color="error" size="extraLarge" />
          <BlackSunIcon color="error" size="huge" />
        </div>
        <div>
          <EmpireIcon color="error" size="small" />
          <EmpireIcon color="error" size="medium" />
          <EmpireIcon color="error" size="large" />
          <EmpireIcon color="error" size="extraLarge" />
          <EmpireIcon color="error" size="huge" />
        </div>
        <div>
          <EwoksIcon color="error" size="small" />
          <EwoksIcon color="error" size="medium" />
          <EwoksIcon color="error" size="large" />
          <EwoksIcon color="error" size="extraLarge" />
          <EwoksIcon color="error" size="huge" />
        </div>
        <div>
          <MaulLoyalistsIcon color="error" size="small" />
          <MaulLoyalistsIcon color="error" size="medium" />
          <MaulLoyalistsIcon color="error" size="large" />
          <MaulLoyalistsIcon color="error" size="extraLarge" />
          <MaulLoyalistsIcon color="error" size="huge" />
        </div>
        <div>
          <MercenariesIcon color="error" size="small" />
          <MercenariesIcon color="error" size="medium" />
          <MercenariesIcon color="error" size="large" />
          <MercenariesIcon color="error" size="extraLarge" />
          <MercenariesIcon color="error" size="huge" />
        </div>
        <div>
          <PykesIcon color="error" size="small" />
          <PykesIcon color="error" size="medium" />
          <PykesIcon color="error" size="large" />
          <PykesIcon color="error" size="extraLarge" />
          <PykesIcon color="error" size="huge" />
        </div>
        <div>
          <RaidersIcon color="error" size="small" />
          <RaidersIcon color="error" size="medium" />
          <RaidersIcon color="error" size="large" />
          <RaidersIcon color="error" size="extraLarge" />
          <RaidersIcon color="error" size="huge" />
        </div>
        <div>
          <RebelsIcon color="error" size="small" />
          <RebelsIcon color="error" size="medium" />
          <RebelsIcon color="error" size="large" />
          <RebelsIcon color="error" size="extraLarge" />
          <RebelsIcon color="error" size="huge" />
        </div>
        <div>
          <RepublicIcon color="error" size="small" />
          <RepublicIcon color="error" size="medium" />
          <RepublicIcon color="error" size="large" />
          <RepublicIcon color="error" size="extraLarge" />
          <RepublicIcon color="error" size="huge" />
        </div>
        <div>
          <RoguesIcon color="error" size="small" />
          <RoguesIcon color="error" size="medium" />
          <RoguesIcon color="error" size="large" />
          <RoguesIcon color="error" size="extraLarge" />
          <RoguesIcon color="error" size="huge" />
        </div>
        <div>
          <SeperatistsIcon color="error" size="small" />
          <SeperatistsIcon color="error" size="medium" />
          <SeperatistsIcon color="error" size="large" />
          <SeperatistsIcon color="error" size="extraLarge" />
          <SeperatistsIcon color="error" size="huge" />
        </div>
      </div>
    </div>
  );
}
