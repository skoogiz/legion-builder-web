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
    </div>
  );
}
