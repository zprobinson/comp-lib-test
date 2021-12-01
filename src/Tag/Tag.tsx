import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TagProps } from "./Tag.types";

const Tag: React.FC<TagProps> = ({
  children,
  color,
  size,
  renderAs = "span",
  isDelete = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<
    typeof renderAs
  >(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    isDelete ? "is-delete" : "",
    helpers,
  ]);

  const RenderAs = isDelete ? "a" : renderAs;

  return (
    <RenderAs data-testid="Tag" className={`tag ${classNames}`} {...rest}>
      {children}
    </RenderAs>
  );
};

export default Tag;
