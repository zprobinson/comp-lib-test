import React from "react";
import { BulmaHelpers } from "..";
import { partitionBulmaPropsG } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

const NavbarItemCustom = <TProps extends {} = {}>(
  WrappedComponent: React.ComponentType<TProps>
) => {
  const ComponentWithBulmaProps = (
    props: TProps & BulmaHelpers & { className?: string }
  ) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TProps>(props);
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([props.className ?? "", helpers]);

    return (
      <WrappedComponent
        data-testid="NavbarItemCustom"
        className={classNames}
        {...(componentProps as TProps)}
      />
    );
  };

  return ComponentWithBulmaProps;
};

export default NavbarItemCustom;
