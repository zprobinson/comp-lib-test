import { BulmaComponentPropsWithoutRef, Size } from "..";

export type IconProps = BulmaComponentPropsWithoutRef<"span"> & {
  containerSize?: Exclude<Size, "is-normal">;
  iconFontClass?: string;
};

export type IconTextProps = BulmaComponentPropsWithoutRef<"span" | "div"> & {
  renderAs?: "span" | "div";
};
