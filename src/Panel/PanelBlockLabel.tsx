import React from "react";
import withBulmaProps from "../bulma";

const PanelBlockLabel: React.FC<React.ComponentPropsWithoutRef<"label">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label
      data-testid="PanelBlock"
      className={`panel-block ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default withBulmaProps(PanelBlockLabel);
