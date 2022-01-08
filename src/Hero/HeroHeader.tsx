import React from "react";
import { withBulmaProps } from "..";

const HeroHeader: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-testid="HeroHeader"
      className={`hero-header ${className}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(HeroHeader);
