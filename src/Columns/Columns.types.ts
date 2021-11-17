import { BulmaComponentPropsWithoutRef, OneOrMore, PartialReadonly } from "..";
import { Breakpoint } from "../types/bulma";
export { OneOrMore } from "../types/utility";

export type ColumnsProps = BulmaComponentPropsWithoutRef<"div"> &
  PartialReadonly<{
    gap: OneOrMore<ColumnsGap>;
    responsive: ColumnsResponsiveness;
    options: OneOrMore<ColumnsOptions>;
  }>;

/* --- Columns Options ---- */
type GapOption = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type ColumnsGap =
  | `is-${GapOption}`
  | `is-${GapOption}-${Breakpoint}`
  | "is-gapless";

type ColumnsResponsivenessOption = "mobile" | "desktop";
export type ColumnsResponsiveness = `is-${ColumnsResponsivenessOption}`;

type ColumnsOptionsOption = "vcentered" | "multiline" | "centered";
export type ColumnsOptions = `is-${ColumnsOptionsOption}`;

/* ---- Column Options ---- */
type ColumnSizeOption =
  | "full"
  | "one-quarter"
  | "one-third"
  | "half"
  | "two-thirds"
  | "three-quarters"
  | "four-fifths"
  | "three-fifths"
  | "two-fifths"
  | "one-fifth"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type ColumnSize =
  | `is-${ColumnSizeOption}`
  | `is-${ColumnSizeOption}-${Breakpoint}`;
export type ColumnOffset =
  | `is-offset-${ColumnSizeOption}`
  | `is-offset-${ColumnSizeOption}-${Breakpoint}`;
export type ColumnNarrow = "is-narrow" | `is-narrow-${Breakpoint}`;
