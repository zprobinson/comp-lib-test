import React from "react";
import { BulmaComponentPropsWithoutRef } from "../types";
import { PartialReadonly } from "../types/utility";
import { strValueOr } from "../utilities/functionalUtils";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import {
  ColumnsGap,
  ColumnsOptions,
  ColumnsResponsiveness,
  OneOrMore,
} from "./Columns.types";

export type ColumnsProps2 = BulmaComponentPropsWithoutRef<"div"> &
  PartialReadonly<{
    gap: OneOrMore<ColumnsGap>;
    responsive: ColumnsResponsiveness;
    options: OneOrMore<ColumnsOptions>;
  }>;

export interface ColumnsProps
  extends BulmaComponentPropsWithoutRef<"div">,
    PartialReadonly<{
      gap: OneOrMore<ColumnsGap>;
      responsive: ColumnsResponsiveness;
      options: OneOrMore<ColumnsOptions>;
    }> {}

const getGapClass: (gap: OneOrMore<ColumnsGap> | undefined) => string = (gap) =>
  gap != null
    ? gap === "is-gapless"
      ? gap
      : `is-variable ${foldClassNames(gap)}`
    : "";

const Columns: React.FC<ColumnsProps2> = ({
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
    <div className={`columns ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Columns;
