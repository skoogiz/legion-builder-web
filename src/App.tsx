import React, {useEffect, useState} from "react";
import axios from "axios";
import {
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  styled,
  Stack,
  IconButton,
} from "@mui/material";
import {DarkMode, LightMode, SettingsSuggest} from "@mui/icons-material";
import {useAppContext} from "@legion-builder/context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faDiscord,
  faPatreon,
  faFacebook,
  faInstagram,
  faReddit,
  faMastodon,
  faThreads,
  faTwitter,
  faTwitch,
  faJediOrder,
  faSith,
  faMandalorian,
} from "@fortawesome/free-brands-svg-icons";
import {faSun, faMoon, faGear} from "@fortawesome/free-solid-svg-icons";
import {ModeSwitch} from "./components/ModeSwitch";
import {ColorMode} from "./types/settings";
import {PageLayout, HeroContent} from "./components/PageLayout";
import {PageConfig} from "./config";

const ModeButton = styled(ToggleButton)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  // paddingInline: theme.spacing(4),
}));

function Footer({pageConfig: {socialMedia}}: {pageConfig: PageConfig}) {
  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="center">
      {Object.keys(socialMedia).map((media) => {
        switch (media) {
          case "bluesky":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faBluesky} />
              </IconButton>
            );
          case "discord":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faDiscord} />
              </IconButton>
            );
          case "patreon":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faPatreon} />
              </IconButton>
            );
          case "mastodon":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faMastodon} />
              </IconButton>
            );
          case "threads":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faThreads} />
              </IconButton>
            );
          case "twitter":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
            );
          case "twitch":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faTwitch} />
              </IconButton>
            );
          case "facebook":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
            );
          case "instagram":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
            );
          case "reddit":
            return (
              <IconButton aria-label={media}>
                <FontAwesomeIcon icon={faReddit} />
              </IconButton>
            );
          default:
            return null;
        }
      })}
    </Stack>
  );
}

export function App() {
  const {
    settings: {colorMode},
    config,
    setColorMode,
  } = useAppContext();

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/cards/Ci")
      .then((response) => {
        // const text = response.data ? Object.keys(response.data).join("|") : "";
        setMessage(JSON.stringify(response.data));
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: ColorMode) => {
    console.log("CHANGE COLOR MODE", {value});
    setColorMode(value);
  };

  return (
    <PageLayout
      hero={
        <HeroContent>
          <FontAwesomeIcon icon={faMandalorian} size="10x" />
          <Typography variant="h3" gutterBottom>
            FastAPI + React + Vite + MUI (TypeScript)
          </Typography>
          <Typography variant="body1">{message || "Loading..."}</Typography>
        </HeroContent>
      }
      footer={<Footer pageConfig={config.pageConfig} />}
    >
      <div>
        <h1>Test</h1>
        <Button variant="contained" color="primary" style={{marginTop: "20px"}}>
          Material UI Button
        </Button>
        <ModeSwitch />
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
    </PageLayout>
  );
}
