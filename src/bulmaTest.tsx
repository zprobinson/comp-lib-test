import React from "react";
import { BulmaHelpers } from "./types";
import { partitionBulmaPropsG } from "./utilities/propUtilities";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";

type Test<TProps extends {} = {}> = TProps &
  BulmaHelpers &
  ({ className?: string } | {});

const withBulmaPropsTest = <TProps extends {} = {}>(
  WrappedComponent: React.ComponentType<TProps>
) => {
  const ComponentWithBulmaProps = (props: any) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TProps>(props);
    const helpers = foldHelpers(bulmaProps);
    const classNames =
      "className" in props
        ? foldClassNames([props.className ?? "", helpers])
        : helpers;

    console.log("props and classNames", props, classNames);

    return (
      <WrappedComponent
        {...(componentProps as TProps)}
        className={classNames}
      />
    );
  };

  return ComponentWithBulmaProps;
};

export default withBulmaPropsTest;
