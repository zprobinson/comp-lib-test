import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { MenuProps } from "./Menu.types";

const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"aside">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <aside data-testid="Menu" className={`menu ${classNames}`} {...rest}>
      {children}
    </aside>
  );
};

export default Menu;
