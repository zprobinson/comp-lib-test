import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarLinkProps } from "./Navbar.types";

const NavbarLink: React.FC<NavbarLinkProps> = ({
  children,
  isArrowless = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"a">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isArrowless ? "is-arrowless" : "",
    helpers,
  ]);

  return (
    <a
      data-testid="NavbarLink"
      className={`navbar-link ${classNames}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default NavbarLink;
