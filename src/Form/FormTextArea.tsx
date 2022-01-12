import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";
import useFormFieldContext from "./formFieldContext";

import { InnerFormTextAreaProps } from "./Form.types";

const FormTextArea: React.FC<InnerFormTextAreaProps> = ({
  className,
  size,
  color,
  state,
  isLoading = false,
  hasFixedSize = false,
  ...props
}) => {
  const context = useFormFieldContext();
  const classNames = foldClassNames([
    className ?? "",
    size ?? context.size ?? "",
    color ?? "",
    state ?? "",
    isLoading ? "is-loading" : "",
    hasFixedSize ? "has-fixed-size" : "",
  ]);

  return (
    <textarea
      data-testid="FormTextArea"
      className={`textarea ${classNames}`}
      {...props}
    ></textarea>
  );
};

export default withBulmaProps(FormTextArea);
