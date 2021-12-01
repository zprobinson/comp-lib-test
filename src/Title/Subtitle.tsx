import React from "react";
import { foldHelpers, foldClassNames } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { DynamicHeadingElement, SubtitleProps } from "./Title.types";

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  size = "3",
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"h1">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", `is-${size}`, helpers]);

  const RenderAs = `h${size}` as DynamicHeadingElement;

  return (
    <RenderAs
      data-testid="Subtitle"
      className={`subtitle ${classNames}`}
      {...rest}
    >
      {children}
    </RenderAs>
  );
};

export default Subtitle;
