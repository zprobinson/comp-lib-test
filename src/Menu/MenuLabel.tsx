import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { MenuLabelProps } from "./Menu.types";

const MenuLabel: React.FC<MenuLabelProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"p">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <p data-testid="MenuLabel" className={`menu-label ${classNames}`} {...rest}>
      {children}
    </p>
  );
};

export default MenuLabel;
