import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableDataCellProps } from "./Table.types";

const TableDataCell: React.FC<TableDataCellProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"td">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <td data-testid="TableDataCell" className={classNames} {...rest}>
      {children}
    </td>
  );
};

export default TableDataCell;
