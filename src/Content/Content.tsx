import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { ContentProps } from "./Content.types";

const Content: React.FC<ContentProps> = ({ children, size, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", size ?? "", helpers]);
  return (
    <div data-testid="Content" className={`content ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Content;
