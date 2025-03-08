import {SvgIcon, SvgIconProps} from "./SvgIcon";

export function Rogues({color, ...props}: SvgIconProps) {
  return (
    <SvgIcon color={color} {...props}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 803 806"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0,806) scale(0.1,-0.1)" fill={color} stroke="none">
          <path
            d="M750 7595 l0 -425 -340 0 -340 0 0 -955 0 -955 340 0 340 0 0 -475 0
-475 495 0 495 0 0 475 0 475 190 0 190 0 0 -475 0 -475 490 0 490 0 0 475 0
475 720 0 c396 0 720 -3 720 -6 0 -3 -785 -1170 -1744 -2593 -959 -1424 -1746
-2593 -1750 -2600 -5 -8 275 -11 1081 -11 l1089 0 2379 3558 2380 3557 -2435
5 -2435 5 -3 423 -2 422 -490 0 -490 0 0 -425 0 -425 -190 0 -190 0 0 425 0
425 -495 0 -495 0 0 -425z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
