import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DropdownAnchorProps } from "./Dropdown.types";

const DropdownAnchor: React.FC<DropdownAnchorProps> = ({
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
    <a
      data-testid="DropdownAnchor"
      className={`dropdown-item ${classNames}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default DropdownAnchor;
