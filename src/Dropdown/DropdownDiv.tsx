import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownDivProps } from "./Dropdown.types";

const DropdownDiv: React.FC<DropdownDivProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
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
    <div
      data-testid="DropdownDiv"
      className={`dropdown-item ${classNames}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default DropdownDiv;
