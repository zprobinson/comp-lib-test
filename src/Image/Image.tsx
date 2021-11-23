import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { ImageProps } from "./Image.types";

const Image: React.FC<ImageProps> = ({
  children,
  dimension,
  imgProps,
  isFullwidth = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"figure">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    dimension ?? "",
    isFullwidth ? "is-fullwidth" : "",
    helpers,
  ]);

  return (
    <figure data-testid="Image" className={`image ${classNames}`} {...rest}>
      {children ?? <img {...imgProps} />}
    </figure>
  );
};

export default Image;
