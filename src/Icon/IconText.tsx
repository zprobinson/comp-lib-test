import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { IconTextProps } from "./Icon.types";

const IconText: React.FC<IconTextProps> = ({
  children,
  renderAs = "span",
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<
    typeof renderAs
  >(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);
  const RenderAs = renderAs;

  return (
    <RenderAs
      data-testid="IconText"
      className={`icon-text ${classNames}`}
      {...rest}
    >
      {children}
    </RenderAs>
  );
};

export default IconText;
