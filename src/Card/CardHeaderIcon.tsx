import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardHeaderIconProps } from "./Card.types";

const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"button">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <button
      data-testid="CardHeaderIcon"
      className={`card-header-icon ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CardHeaderIcon;
