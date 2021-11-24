import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TagsProps } from "./Tags.types";

const Tags: React.FC<TagsProps> = ({
  children,
  groupSize,
  hasAddons = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    groupSize ?? "",
    hasAddons ? "has-addons" : "",
    helpers,
  ]);

  return (
    <div data-testid="Tags" className={`tags ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Tags;
