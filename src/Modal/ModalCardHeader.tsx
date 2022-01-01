import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalCardHeaderProps } from "./Modal.types";

const ModalCardHeader: React.FC<ModalCardHeaderProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"header">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <header
      data-testid="ModalCardHeader"
      className={`modal-card-head ${classNames}`}
      {...rest}
    >
      {children}
    </header>
  );
};

export default ModalCardHeader;
