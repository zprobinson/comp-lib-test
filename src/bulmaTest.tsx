import React from "react";
import { BulmaHelpers } from ".";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";
import { partitionBulmaPropsG } from "./utilities/propUtilities";

const withBulmaPropsTest = <
  T extends { className?: string } = { className?: string }
>(
  WrappedComponent: React.ComponentType<T>
) => {
  const displayName =
    WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";

  const ComponentWithBulmaProps = <TInner extends T & BulmaHelpers>(
    props: TInner
  ) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TInner>(props);
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([props.className ?? "", helpers]);

    return (
      <WrappedComponent
        {...(componentProps as TInner)}
        className={classNames}
      />
    );
  };

  ComponentWithBulmaProps.displayName = displayName;

  return ComponentWithBulmaProps;
};

export default withBulmaPropsTest;
