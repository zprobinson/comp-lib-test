import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { BlockProps } from "./Block.types";

const Block: React.FC<BlockProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);
  return (
    <div data-testid="Block" className={`block ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Block;
