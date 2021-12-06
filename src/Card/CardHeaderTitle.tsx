import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardHeaderTitleProps } from "./Card.types";

const CardHeaderTitle: React.FC<CardHeaderTitleProps> = ({
  children,
  isCentered = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"p">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isCentered ? "is-centered" : "",
    helpers,
  ]);

  return (
    <p
      data-testid="CardHeaderTitle"
      className={`card-header-title ${classNames}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default CardHeaderTitle;
