import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { MenuListProps } from "./Menu.types";

const MenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"ul">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <ul data-testid="MenuList" className={`menu-list ${classNames}`} {...rest}>
      {children}
    </ul>
  );
};

export default MenuList;
