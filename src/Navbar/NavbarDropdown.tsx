import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarDropdownProps } from "./Navbar.types";

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  children,
  isRight = false,
  isBoxed = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isRight ? "is-right" : "",
    isBoxed ? "is-boxed" : "",
    helpers,
  ]);

  return (
    <div
      data-testid="NavbarDropdown"
      className={`navbar-dropdown ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavbarDropdown;
