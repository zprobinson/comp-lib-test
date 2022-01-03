import { Equals } from "./../types/utility";
import { WithoutHelpers } from "./../types/component";
import { MouseEventHandler } from "react";
import {
  BulmaComponentPropsWithoutRef,
  Is,
  OneOrMore,
  PrimaryColor,
  SecondaryColor,
  Size,
  BulmaHelpers,
} from "..";

export type InnerButtonProps = WithoutHelpers<ButtonProps>;

export type ButtonProps = BulmaComponentPropsWithoutRef<"button"> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  size?: ButtonSize;
  state?: Exclude<ButtonState, "is-loading">;
  modifiers?: OneOrMore<ButtonModifier>;
  isLoading?: boolean;
};

type State = "hovered" | "focused" | "active" | "loading";

type ButtonColorOption = Is<PrimaryColor>;
type ButtonColorLightOption = `${ButtonColorOption} is-light`;

export type ButtonColor =
  | Is<"text" | "ghost">
  | Is<SecondaryColor>
  | ButtonColorOption
  | ButtonColorLightOption;
export type ButtonSize = Size;
export type ButtonState = Is<State>;
export type ButtonModifier = Is<
  "fullwidth" | "outlined" | "inverted" | "rounded" | "static" | "selected"
>;
