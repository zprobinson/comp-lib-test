import React from "react";
import { BulmaHelpers } from "..";
import { partitionBulmaPropsG } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

const NavbarItemCustom = <TProps extends { className?: string } = {}>(
  WrappedComponent: React.ComponentType<TProps>
) => {
  const ComponentWithBulmaProps = (props: TProps & BulmaHelpers) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TProps>(props);
    const { className, ...rest } = componentProps;
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([className ?? "", helpers]);

    return (
      <WrappedComponent
        data-testid="NavbarItemCustom"
        className={classNames}
        {...(rest as TProps)}
      />
    );
  };

  return ComponentWithBulmaProps;
};

export default NavbarItemCustom;
