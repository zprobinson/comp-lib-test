import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar: React.VFC<ProgressBarProps> = ({
  color,
  size,
  ...props
}) => {
  const {
    bulmaProps,
    componentProps,
  } = partitionBulmaComponentProps<"progress">(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    size ?? "",
    helpers,
  ]);

  return (
    <progress
      data-testid="ProgressBar"
      className={`progress ${classNames}`}
      {...rest}
    >
      {rest.value ?? undefined}
    </progress>
  );
};

export default ProgressBar;
