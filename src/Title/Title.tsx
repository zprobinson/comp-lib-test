import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { DynamicHeadingElement, TitleProps } from "./Title.types";

const Title: React.FC<TitleProps> = ({
  children,
  size = "3",
  isSpaced = false,
  ...props
}: TitleProps) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"h1">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    `is-${size}`,
    isSpaced ? "is-spaced" : "",
    helpers,
  ]);

  const RenderAs = `h${size}` as DynamicHeadingElement;

  return (
    <RenderAs data-testid="Title" className={`title ${classNames}`} {...rest}>
      {children}
    </RenderAs>
  );
};

export default Title;
