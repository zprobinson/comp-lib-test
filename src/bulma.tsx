import React from "react";
import { BulmaHelpers } from "..";
import { partitionBulmaPropsG } from "./utilities/propUtilities";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";

const withBulmaProps = <TProps extends {} = {}>(
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
        {...(componentProps as TProps)}
        className={classNames}
      />
    );
  };

  return ComponentWithBulmaProps;
};

export default withBulmaProps;
