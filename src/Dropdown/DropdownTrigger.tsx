import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownTriggerProps } from "./Dropdown.types";

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
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
      data-testid="DropdownTrigger"
      className={`dropdown-trigger ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DropdownTrigger;
