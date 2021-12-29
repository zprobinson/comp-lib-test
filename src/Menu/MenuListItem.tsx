import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { MenuListItemProps } from "./Menu.types";

const MenuListItem: React.FC<MenuListItemProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"a">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    helpers,
  ]);

  return (
    <li data-testid="MenuListItem">
      <a className={classNames} {...rest}>
        {children}
      </a>
    </li>
  );
};

export default MenuListItem;
