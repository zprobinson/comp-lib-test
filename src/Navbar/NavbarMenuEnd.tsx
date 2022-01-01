import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { NavbarMenuEndProps } from "./Navbar.types";

const NavbarMenuEnd: React.FC<NavbarMenuEndProps> = ({
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
      data-testid="NavbarMenuEnd"
      className={`navbar-end ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default NavbarMenuEnd;
