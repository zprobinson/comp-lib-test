import React from "react";
import { BulmaHelpers } from "./types";
import { partitionBulmaPropsG } from "./utilities/propUtilities";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";

type Test<TProps extends {} = {}> = TProps &
  BulmaHelpers &
  ({ className?: string } | {});

const withBulmaPropsTest = <TProps extends { className?: string } = {}>(
  WrappedComponent: React.ComponentType<TProps>
) => {
  const ComponentWithBulmaProps = (props: TProps & BulmaHelpers) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TProps>(props);
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([props.className ?? "", helpers]);

    console.log("props and classNames", props, classNames);

    const test = (
      <WrappedComponent
        {...(componentProps as TProps)}
        className={classNames}
      />
    );

    console.log("the component", test);

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
