import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarMenuProps } from "./Navbar.types";

const NavbarMenu: React.FC<NavbarMenuProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    helpers,
  ]);

  return (
    <div
      data-testid="NavbarMenu"
      className={`navbar-menu ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavbarMenu;
