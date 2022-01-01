import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarItemDivProps } from "./Navbar.types";

const NavbarItemDiv: React.FC<NavbarItemDivProps> = ({
  children,
  isActive = false,
  hasDropdown = false,
  hasDropdownUp = false,
  isHoverable = false,
  isExpanded = false,
  isTab = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const dropdownClassName = hasDropdown
    ? foldClassNames([
        "has-dropdown",
        hasDropdownUp ? "has-dropdown-up" : "",
        isHoverable ? "is-hoverable" : "",
      ])
    : "";
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    dropdownClassName,
    isExpanded ? "is-expanded" : "",
    isTab ? "is-tab" : "",
    helpers,
  ]);

  return (
    <div
      data-testid="NavbarItemDiv"
      className={`navbar-item ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavbarItemDiv;
