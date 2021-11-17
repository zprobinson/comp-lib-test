import React from "react";
import { foldHelpers, foldClassNames } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { ColumnProps } from "./Column.types";

const Column: React.FC<ColumnProps> = ({
  children,
  columnSize,
  offset,
  narrow,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const sizeClass = foldClassNames(columnSize || "");
  const offsetClass = foldClassNames(offset || "");
  const narrowClass = foldClassNames(narrow || "");
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    sizeClass,
    offsetClass,
    narrowClass,
    helpers,
  ]);

  return (
    <div data-testid="Column" className={`column ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Column;
