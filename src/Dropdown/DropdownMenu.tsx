import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownMenuProps } from "./Dropdown.types";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="DropdownMenu"
      className={`dropdown-menu ${classNames}`}
      role="menu"
      {...rest}
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
