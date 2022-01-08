import React from "react";
import { withBulmaProps } from "..";

const HeroFooter: React.FC<React.ComponentPropsWithoutRef<"div">> = (props) => {
  return <div data-testid="HeroFooter" {...props}></div>;
};

export default withBulmaProps(HeroFooter);
