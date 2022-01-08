import React from "react";
import { withBulmaProps } from "..";

const Footer: React.FC<React.ComponentPropsWithoutRef<"footer">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="Footer"
      className={`footer ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(Footer);
