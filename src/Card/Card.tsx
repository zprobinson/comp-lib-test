import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div data-testid="Card" className={`card ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
