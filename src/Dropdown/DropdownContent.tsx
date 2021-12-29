import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownContentProps } from "./Dropdown.types";

const DropdownContent: React.FC<DropdownContentProps> = ({
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
      data-testid="DropdownContent"
      className={`dropdown-content ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DropdownContent;
