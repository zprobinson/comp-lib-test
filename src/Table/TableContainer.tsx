import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableContainerProps } from "./Table.types";

const TableContainer: React.FC<TableContainerProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="TableContainer"
      className={`table-container ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TableContainer;
