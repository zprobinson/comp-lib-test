import React from "react";

import { BoxProps } from "./Box.types";

import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldHelpers, foldClassNames } from "../utilities/listUtils";

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div data-testid="Box" className={`box ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
