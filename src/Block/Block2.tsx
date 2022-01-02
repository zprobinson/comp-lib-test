import React from "react";
import { Block2Props } from ".";
import withBulmaProps from "../bulma";

const Block2: React.FC<Block2Props> = ({ children, className, ...props }) => {
  return (
    <div data-testid="Block" className={`block ${className}`} {...props}>
      {children}
    </div>
  );
};

export default withBulmaProps(Block2);
