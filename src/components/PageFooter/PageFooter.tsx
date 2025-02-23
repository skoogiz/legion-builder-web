import {
  faBluesky,
  faDiscord,
  faFacebook,
  faInstagram,
  faMastodon,
  faPatreon,
  faReddit,
  faThreads,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAppContext} from "@legion-builder/context";
import {IconButton, Stack} from "@mui/material";

export function PageFooter() {
  const {
    config: {
      pageConfig: {socialMedia},
    },
  } = useAppContext();
  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="center">
      {Object.keys(socialMedia).map((media) => {
        switch (media) {
          case "bluesky":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faBluesky} />
              </IconButton>
            );
          case "discord":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faDiscord} />
              </IconButton>
            );
          case "patreon":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faPatreon} />
              </IconButton>
            );
          case "mastodon":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faMastodon} />
              </IconButton>
            );
          case "threads":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faThreads} />
              </IconButton>
            );
          case "twitter":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faTwitter} />
              </IconButton>
            );
          case "twitch":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faTwitch} />
              </IconButton>
            );
          case "facebook":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faFacebook} />
              </IconButton>
            );
          case "instagram":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
            );
          case "reddit":
            return (
              <IconButton key={`${media}-button`} aria-label={media}>
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
