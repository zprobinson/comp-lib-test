import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownProps } from "./Dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  children,
  isActive = false,
  isHoverable = false,
  isRightAligned = false,
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
    isHoverable ? "is-hoverable" : "",
    isRightAligned ? "is-right" : "",
    helpers,
  ]);

  return (
    <div data-testid="Dropdown" className={`dropdown ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Dropdown;
