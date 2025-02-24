import {SvgIcon as MuiSvgIcon, SvgIconProps as MuiSvgIconProps} from "@mui/material";

export type SvgIconProps = Omit<
  MuiSvgIconProps,
  "viewBox" | "inheritViewBox" | "fontSize"
> & {
  size?: MuiSvgIconProps["fontSize"];
};

export function SvgIcon({size, sx, ...props}: SvgIconProps) {
  return (
    <MuiSvgIcon
      inheritViewBox
      sx={{
        ...sx,
        fill: "currentColor",
        // height: "1em",
        // width: "1em",
        // lineHeight: 1,
        // fontSize: size,
      }}
      fontSize={size}
      {...props}
    />
  );
}
