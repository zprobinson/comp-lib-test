import React from "react";
import withBulmaProps from "../bulma";

const PanelBlockDiv: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      data-testid="PanelBlock"
      className={`panel-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default withBulmaProps(PanelBlockDiv);
