import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarProps } from "./Navbar.types";

const Navbar: React.FC<NavbarProps> = ({
  children,
  color,
  modifiers,
  isFixedHtmlInterop,
  isTransparent = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"nav">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const navbarModifiers = foldClassNames(modifiers);
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    navbarModifiers,
    isFixedHtmlInterop ?? "",
    isTransparent ? "is-transparent" : "",
    helpers,
  ]);

  return (
    <nav
      data-testid="Navbar"
      className={`navbar ${classNames}`}
      role="navigation"
      aria-label="main navigation"
      {...rest}
    >
      {children}
    </nav>
  );
};

export default Navbar;
