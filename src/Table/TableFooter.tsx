import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { TableFooterProps } from "./Table.types";

const TableFooter: React.FC<TableFooterProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"tfoot">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <tfoot data-testid="TableFooter" className={classNames} {...rest}>
      {children}
    </tfoot>
  );
};

export default TableFooter;
