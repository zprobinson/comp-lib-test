import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableHeaderCellProps } from "./Table.types";

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"th">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <th data-testid="TableHeaderCell" className={classNames} {...rest}>
      {children}
    </th>
  );
};

export default TableHeaderCell;
