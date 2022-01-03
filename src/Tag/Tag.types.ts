import {
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  Is,
  PrimaryColor,
  SecondaryColor,
  Size,
} from "../types";

export type InnerTagAnchorProps = WithoutHelpers<TagAnchorProps>;
export type InnerTagSpanProps = WithoutHelpers<TagSpanProps>;

export type TagAnchorProps = BulmaComponentPropsWithoutRef<"a"> & {
  color?: TagColor;
  size?: Exclude<Size, "is-small">;
  isDelete?: boolean;
};

export type TagSpanProps = BulmaComponentPropsWithoutRef<"span"> & {
  color?: TagColor;
  size?: Exclude<Size, "is-small">;
  isDelete?: boolean;
};

type TagColorOption = Is<PrimaryColor>;
type TagColorLightOption = `${TagColorOption} is-light`;

export type TagColor =
  | TagColorOption
  | Is<SecondaryColor>
  | TagColorLightOption;
