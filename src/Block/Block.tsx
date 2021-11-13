import React from "react";
import { BulmaComponentPropsWithoutRef } from "../types";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

export type BlockProps = BulmaComponentPropsWithoutRef<"div">;

const Block: React.FC<BlockProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);
  return (
    <div className={`block ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Block;
