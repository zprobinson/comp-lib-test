import React from "react";
import { withBulmaProps } from "..";

const HeroHeader: React.FC<React.ComponentPropsWithoutRef<"div">> = (props) => {
  return <div data-testid="HeroHeader" {...props}></div>;
};

export default withBulmaProps(HeroHeader);
