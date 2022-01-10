import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormSelectProps } from "./Form.types";

const FormSelect: React.FC<InnerFormSelectProps> = ({
  className,
  size,
  color,
  state,
  isLoading = false,
  isMultiple = false,
  isRounded = false,
  _innerSelectClassName = "",
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isMultiple ? "is-multiple" : "",
    isRounded ? "is-rounded" : "",
  ]);
  const selectClassNames = foldClassNames([
    _innerSelectClassName,
    isLoading ? "is-loading" : "",
  ]);

  return (
    <div data-testid="FormSelectContainer" className={`select ${classNames}`}>
      <select
        data-testid="FormSelect"
        className={selectClassNames}
        {...props}
      ></select>
    </div>
  );
};

export default withBulmaProps(FormSelect);
