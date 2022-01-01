import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarMenuStartProps } from "./Navbar.types";

const NavbarMenuStart: React.FC<NavbarMenuStartProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="NavbarMenuStart"
      className={`navbar-start ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavbarMenuStart;
