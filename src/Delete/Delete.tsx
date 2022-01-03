import React from "react";
import withBulmaProps from "../bulma";

import { InnerDeleteProps } from "./Delete.types";

const Delete: React.VFC<InnerDeleteProps> = ({
  className,
  onClick,
  size,
  ...props
}) => {
  return (
    <button
      data-testid="Delete"
      onClick={onClick}
      className={`delete ${className}`}
      {...props}
    ></button>
  );
};

export default withBulmaProps(Delete);
