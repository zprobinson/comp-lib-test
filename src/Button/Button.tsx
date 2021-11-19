// Generated with util/create-component.js
import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  size,
  state,
  modifiers = [],
  isLoading = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"button">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const modifierClass = foldClassNames(modifiers);
  const loadingClass = isLoading ? "is-loading" : "";
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    size ?? "",
    state ?? "",
    modifierClass,
    loadingClass,
    helpers,
  ]);

  return (
    <button
      data-testid="Button"
      onClick={onClick}
      className={`button ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
