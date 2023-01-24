import React from "react";
import * as icons from "../objects";
import { iconTypes } from "../";

export interface IconProps {
  refIcon: iconTypes;
  color?: string;
  size?: number;
  onClick?: () => void;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  refIcon,
  color,
  size,
  onClick,
  className,
}) => (
  <div
    className={["icon-container", className].join(" ")}
    onClick={onClick}
    style={{
      width: size + "px",
      height: size + "px",
      fill: color,
    }}
  >
    {React.createElement(icons[refIcon], {})}
  </div>
);

export default Icon