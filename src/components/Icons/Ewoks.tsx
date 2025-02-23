import {SvgIcon, SvgIconProps} from "./SvgIcon";

export function Ewoks({color, ...props}: SvgIconProps) {
  return (
    <SvgIcon color={color} {...props}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 499 903"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0,903) scale(0.1,-0.1)" fill={color} stroke="none">
          <path
            d="M1323 5822 c-721 -1764 -1313 -3212 -1315 -3218 -2 -6 235 -595 527
-1308 l530 -1296 1573 3 1574 2 390 953 c214 525 388 955 386 957 -2 2 -518
188 -1148 413 -630 226 -1158 416 -1175 422 -27 11 67 39 1110 337 627 179
1144 328 1148 333 7 6 -2264 5580 -2282 5602 -3 4 -596 -1436 -1318 -3200z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
