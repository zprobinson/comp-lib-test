import React from "react";
import { BulmaHelpers } from "./types";
import { partitionBulmaPropsG } from "./utilities/propUtilities";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";

const withBulmaProps = <TProps extends { className?: string } = {}>(
  WrappedComponent: React.ComponentType<TProps>
) => {
  const ComponentWithBulmaProps = (
    props: React.PropsWithChildren<TProps> & BulmaHelpers
  ) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TProps>(props);
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([props.className ?? "", helpers]);

    return (
      <WrappedComponent
        {...(componentProps as TProps)}
        className={classNames}
      />
    );
  };

  return ComponentWithBulmaProps;
};

export default withBulmaProps;
