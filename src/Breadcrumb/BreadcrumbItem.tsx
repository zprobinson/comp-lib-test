import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldHelpers, foldClassNames } from "../utilities/listUtils";

import { BreadcrumbItemProps } from "./Breadcrumb.types";

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"li">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    isActive ? "is-active" : "",
    helpers,
  ]);

  return (
    <li data-testid="BreadcrumbItem" className={classNames} {...rest}>
      {children}
    </li>
  );
};

export default BreadcrumbItem;
