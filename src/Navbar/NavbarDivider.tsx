import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarDividerProps } from "./Navbar.types";

const NavbarDivider: React.VFC<NavbarDividerProps> = ({ ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"hr">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <hr
      data-testid="NavbarDivider"
      className={`navbar-divider ${classNames}`}
      {...rest}
    />
  );
};

export default NavbarDivider;
