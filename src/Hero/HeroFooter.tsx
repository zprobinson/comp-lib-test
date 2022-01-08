import React from "react";
import { withBulmaProps } from "..";

const HeroFooter: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="HeroFooter"
      className={`hero-footer ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(HeroFooter);
