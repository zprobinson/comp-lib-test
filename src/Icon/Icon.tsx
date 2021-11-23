import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({
  children,
  containerSize,
  iconFontClass,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"span">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    containerSize ?? "",
    helpers,
  ]);

  return (
    <span data-testid="Icon" className={`icon ${classNames}`} {...rest}>
      {children ?? <i className={iconFontClass}></i>}
    </span>
  );
};

export default Icon;
