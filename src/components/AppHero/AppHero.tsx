import {faMandalorian} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Typography} from "@mui/material";
import {HeroContent} from "../PageLayout";

export function AppHero() {
  return (
    <HeroContent>
      <FontAwesomeIcon icon={faMandalorian} size="10x" />
      <Typography variant="h3" gutterBottom>
        FastAPI + React + Vite + MUI (TypeScript)
      </Typography>
    </HeroContent>
  );
}
