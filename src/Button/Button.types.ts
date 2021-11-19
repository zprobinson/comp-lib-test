import { MouseEventHandler } from "react";
import { BulmaComponentPropsWithoutRef, OneOrMore, PrimaryColor } from "..";

export type ButtonProps = BulmaComponentPropsWithoutRef<"button"> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  size?: ButtonSize;
  state?: Exclude<ButtonState, "is-loading">;
  modifiers?: OneOrMore<ButtonModifier>;
  isLoading?: boolean;
};

type Size = "small" | "normal" | "medium" | "large";
type State = "hovered" | "focused" | "active" | "loading";

type ButtonColorOption = `is-${PrimaryColor}`;
type ButtonColorLightOption = `${ButtonColorOption} is-light`;

export type ButtonColor =
  | "is-text"
  | "is-ghost"
  | ButtonColorOption
  | ButtonColorLightOption;
export type ButtonSize = `is-${Size}`;
export type ButtonState = `is-${State}`;
export type ButtonModifier =
  | "is-fullwidth"
  | "is-outlined"
  | "is-inverted"
  | "is-rounded"
  | "is-static"
  | "is-selected";
