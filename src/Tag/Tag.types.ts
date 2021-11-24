import {
  BulmaComponentPropsWithoutRef,
  Is,
  PrimaryColor,
  SecondaryColor,
  Size,
} from "..";

export type TagProps = BulmaComponentPropsWithoutRef<"span"> & {
  color?: TagColor;
  size?: Exclude<Size, "is-small">;
  renderAs?: "span" | "a";
  isDelete?: boolean;
};

type TagColorOption = Is<PrimaryColor>;
type TagColorLightOption = `${TagColorOption} is-light`;

export type TagColor =
  | TagColorOption
  | Is<SecondaryColor>
  | TagColorLightOption;
