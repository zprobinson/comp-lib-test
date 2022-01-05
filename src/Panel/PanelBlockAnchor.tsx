import React from "react";
import withBulmaProps from "../bulma";

const PanelBlockAnchor: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      data-testid="PanelBlock"
      className={`panel-block ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default withBulmaProps(PanelBlockAnchor);
