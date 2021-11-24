import {
  BulmaComponentPropsWithoutRef,
  Is,
  PrimaryColor,
  SecondaryColor,
  Size,
} from "..";

export type ProgressBarProps = BulmaComponentPropsWithoutRef<"progress"> & {
  color?: ProgressBarColor;
  size?: ProgressBarSize;
};

type ProgressBarColor = Is<PrimaryColor | SecondaryColor>;
type ProgressBarSize = Size;
