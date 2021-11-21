import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { DeleteProps } from "./Delete.types";

const Delete: React.VFC<DeleteProps> = ({ onClick, size, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"button">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", size ?? "", helpers]);

  return (
    <button
      data-testid="Delete"
      onClick={onClick}
      className={`delete ${classNames}`}
      {...rest}
    ></button>
  );
};

export default Delete;
