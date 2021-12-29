import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownDividerProps } from "./Dropdown.types";

const DropdownDivider: React.VFC<DropdownDividerProps> = ({ ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"hr">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return <hr className={`dropdown-divider ${classNames}`} {...rest} />;
};

export default DropdownDivider;
