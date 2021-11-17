import React from "react";
import { strValueOr } from "../utilities/functionalUtils";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { ColumnsGap, ColumnsProps, OneOrMore } from "./Columns.types";

const getGapClass: (gap: OneOrMore<ColumnsGap> | undefined) => string = (gap) =>
  gap != null
    ? gap === "is-gapless"
      ? gap
      : `is-variable ${foldClassNames(gap)}`
    : "";

const Columns: React.FC<ColumnsProps> = ({
  children,
  gap,
  responsive,
  options,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const gapClass = getGapClass(gap);
  const responsiveClass = strValueOr(responsive);
  const optionsClass = foldClassNames(options || "");
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    gapClass,
    responsiveClass,
    optionsClass,
    helpers,
  ]);

  return (
    <div data-testid="Columns" className={`columns ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Columns;
