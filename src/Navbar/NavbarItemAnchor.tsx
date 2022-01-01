import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarItemAnchorProps } from "./Navbar.types";

const NavbarItemAnchor: React.FC<NavbarItemAnchorProps> = ({
  children,
  isActive = false,
  isExpanded = false,
  isTab = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"a">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    isExpanded ? "is-expanded" : "",
    isTab ? "is-tab" : "",
    helpers,
  ]);

  return (
    <a
      data-testid="NavbarItemAnchor"
      className={`navbar-item ${classNames}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default NavbarItemAnchor;
