import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableBodyProps } from "./Table.types";

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"tbody">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <tbody data-testid="TableBody" className={classNames} {...rest}>
      {children}
    </tbody>
  );
};

export default TableBody;
