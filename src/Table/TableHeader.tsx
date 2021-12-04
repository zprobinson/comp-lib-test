import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableHeaderProps, TableFooterProps } from "./Table.types";

const TableHeader: React.FC<TableHeaderProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"thead">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <thead data-testid="TableHeader" className={classNames} {...rest}>
      {children}
    </thead>
  );
};

export default TableHeader;
