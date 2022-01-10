import React from "react";
import { foldClassNames } from "../utilities/listUtils";
import { InnerFormTextAreaProps } from "./Form.types";
import useFormFieldContext from "./formFieldContext";

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

export default FormTextArea;
