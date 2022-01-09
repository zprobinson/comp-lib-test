import {
  BulmaComponentPropsWithRef,
  BulmaComponentPropsWithoutRef,
  WithoutHelpers,
  Is,
  Size,
} from "./../types";

export type FormFieldContextType = {
  size?: Size | undefined;
};

export type InnerFormFieldProps = WithoutHelpers<FormFieldProps>;
export type InnerFormFieldLabelProps = WithoutHelpers<FormFieldLabelProps>;

export type FormProps = BulmaComponentPropsWithRef<"form">;

export type FormFieldProps = BulmaComponentPropsWithoutRef<"div"> & {
  kind?: "addons" | "grouped";
  alignment?: "right" | "centered";
  groupMultiline?: boolean;
  isExpanded?: boolean;
  isHorizontal?: boolean;
  size?: Size;
};

export type FormFieldLabelProps = BulmaComponentPropsWithRef<"label"> & {
  size?: Size;
};
export type FormFieldBodyProps = BulmaComponentPropsWithoutRef<"div">;

export type FormControlProps = BulmaComponentPropsWithoutRef<"div">;
