import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableRowProps } from "./Table.types";

const TableRow: React.FC<TableRowProps> = ({
  children,
  isSelected = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"tr">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isSelected ? "is-selected" : "",
    helpers,
  ]);

  return (
    <tr data-testid="TableRow" className={classNames} {...rest}>
      {children}
    </tr>
  );
};

export default TableRow;
