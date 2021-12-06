import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardFooterProps } from "./Card.types";

const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"footer">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <footer
      data-testid="CardFooter"
      className={`card-footer ${classNames}`}
      {...rest}
    >
      {children}
    </footer>
  );
};

export default CardFooter;
