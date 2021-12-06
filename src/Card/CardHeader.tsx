import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardHeaderProps } from "./Card.types";

const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"header">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <header
      data-testid="CardHeader"
      className={`card-header ${classNames}`}
      {...rest}
    >
      {children}
    </header>
  );
};

export default CardHeader;
