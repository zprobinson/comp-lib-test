import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableProps } from "./Table.types";

const Table: React.FC<TableProps> = ({
  children,
  modifiers = "",
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"table">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const modifiersClassName = foldClassNames(modifiers);
  const classNames = foldClassNames([
    className ?? "",
    modifiersClassName,
    helpers,
  ]);

  return (
    <table data-testid="Table" className={`table ${classNames}`} {...rest}>
      {children}
    </table>
  );
};

export default Table;
