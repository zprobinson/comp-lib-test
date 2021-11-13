import React from "react";
import { BulmaComponentPropsWithoutRef } from "../types";
import { PartialReadonly } from "../types/utility";
import { foldHelpers, foldClassNames } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import {
  ColumnNarrow,
  ColumnOffset,
  ColumnSize,
  OneOrMore,
} from "./Column.types";

export type ColumnProps = BulmaComponentPropsWithoutRef<"div"> &
  PartialReadonly<{
    columnSize: OneOrMore<ColumnSize>;
    offset: OneOrMore<ColumnOffset>;
    narrow: OneOrMore<ColumnNarrow>;
  }>;

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
    <div className={`column ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Column;
