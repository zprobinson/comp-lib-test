import React from "react";
import { withBulmaProps } from "..";
import { foldClassNames } from "../utilities/listUtils";

import { InnerHeroProps, __FULLHEIGHT_WITH_NAVBAR__ } from "./Hero.types";

const Hero: React.FC<InnerHeroProps> = ({
  children,
  className,
  color,
  size,
  isFullHeightWithNavbar = false,
  ...props
}) => {
  const sizeClass = isFullHeightWithNavbar ? __FULLHEIGHT_WITH_NAVBAR__ : size;
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    sizeClass ?? "",
  ]);

  return (
    <div data-testid="Hero" className={`hero ${classNames}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Hero);
