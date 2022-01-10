import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormInputProps } from "./Form.types";

const FormInput: React.FC<InnerFormInputProps> = ({
  className,
  size,
  color,
  state,
  isStatic = false,
  isLoading = false,
  isRounded = false,
  type,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isStatic ? "is-static" : "",
    isLoading ? "is-loading" : "",
    isRounded ? "is-rounded" : "",
  ]);

  return (
    <input
      data-testid="FormInput"
      type={type ?? "text"}
      className={`input ${classNames}`}
      {...props}
    ></input>
  );
};

export default withBulmaProps(FormInput);
