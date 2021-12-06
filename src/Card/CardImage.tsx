import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardImageProps } from "./Card.types";

const CardImage: React.FC<CardImageProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="CardImage"
      className={`card-image ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardImage;
