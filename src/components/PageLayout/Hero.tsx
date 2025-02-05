import {styled} from "@mui/material";

export const Hero = styled("div")<{headerHeight: number}>(({theme, headerHeight}) => ({
  position: "relative",
  flexGrow: 1,
  flexShrink: 0,
  height: headerHeight > 0 ? `calc(100svh - ${headerHeight}px)` : "100vh",
  minHeight: "650px",
  color: theme.palette.background.hero.contrastText,
  overflow: "hidden",
}));

export const HeroContent = styled("div")<{textAlign?: "left" | "center" | "right"}>(
  ({textAlign = "center"}) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 0,
    transform: "translate3d(-50%, -50%, 0)",
    textAlign,
    overflow: "hidden",
  }),
);

type HeroBackgroundProps = {
  imgSrc?: string;
};

const HeroBackgroundComponent = styled("div")<HeroBackgroundProps>(({theme, imgSrc}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  backgroundColor: theme.palette.background.hero.main,
  backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  zIndex: 0,
}));

export function HeroBackground({imgSrc}: HeroBackgroundProps) {
  return (
    <HeroBackgroundComponent imgSrc={imgSrc}>
      {imgSrc && (
        <img
          fetchPriority="high"
          width="1440"
          height="780"
          alt="hero image"
          src={imgSrc}
          style={{display: "none"}}
        />
      )}
    </HeroBackgroundComponent>
  );
}
