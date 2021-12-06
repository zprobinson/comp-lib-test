import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { CardFooterItemProps } from "./Card.types";

const CardFooterItem: React.FC<CardFooterItemProps> = ({
  children,
  ...props
}) => {
  const RenderAs = props.href === undefined ? "p" : "a";
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<
    typeof RenderAs
  >(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return RenderAs === "a" ? (
    <a
      data-testid="CardFooterItem"
      className={`card-footer ${classNames}`}
      {...(rest as React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >)}
    >
      {children}
    </a>
  ) : (
    <p
      data-testid="CardFooterItem"
      className={`card-footer ${classNames}`}
      {...(rest as React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >)}
    >
      {children}
    </p>
  );
};

export default CardFooterItem;
