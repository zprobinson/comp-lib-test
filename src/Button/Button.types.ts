import { MouseEventHandler } from "react";
import { BulmaComponentPropsWithoutRef, Is, OneOrMore, PrimaryColor } from "..";

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

type ButtonColorOption = Is<PrimaryColor>;
type ButtonColorLightOption = `${ButtonColorOption} is-light`;

export type ButtonColor =
  | Is<"text" | "ghost">
  | ButtonColorOption
  | ButtonColorLightOption;
export type ButtonSize = Is<Size>;
export type ButtonState = Is<State>;
export type ButtonModifier = Is<
  "fullwidth" | "outlined" | "inverted" | "rounded" | "static" | "selected"
>;
