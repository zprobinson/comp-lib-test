import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldHelpers, foldClassNames } from "../utilities/listUtils";

import { BreadcrumbProps } from "./Breadcrumb.types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  alignment,
  separator,
  size,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"nav">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    alignment ?? "",
    separator ?? "",
    size ?? "",
    helpers,
  ]);

  return (
    <nav
      data-testid="Breadcrumb"
      className={`breadcrumb ${classNames}`}
      {...rest}
    >
      <ul>{children}</ul>
    </nav>
  );
};

export default Breadcrumb;
