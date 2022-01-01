import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarBurgerProps } from "./Navbar.types";

const NavbarBurger: React.VFC<NavbarBurgerProps> = ({
  isActive = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"a">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <a
      data-testid="NavbarBurger"
      className={`navbar-burger ${classNames}`}
      aria-label="menu"
      aria-expanded={isActive ? "true" : "false"}
      {...rest}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};

export default NavbarBurger;