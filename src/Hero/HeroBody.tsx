import React from "react";
import { withBulmaProps } from "..";

const HeroBody: React.FC<React.ComponentPropsWithoutRef<"div">> = (props) => {
  return <div data-testid="HeroBody" {...props}></div>;
};

export default withBulmaProps(HeroBody);
