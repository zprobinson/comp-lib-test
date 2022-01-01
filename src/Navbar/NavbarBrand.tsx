import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarBrandProps } from "./Navbar.types";

const NavbarBrand: React.FC<NavbarBrandProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="NavbarBrand"
      className={`navbar-brand ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavbarBrand;
