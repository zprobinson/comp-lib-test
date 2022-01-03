import React from "react";
import withBulmaProps from "../bulma";

const CardFooterAnchor: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      data-testid="CardFooterItem"
      className={`card-footer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default withBulmaProps(CardFooterAnchor);
