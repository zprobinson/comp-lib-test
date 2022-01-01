import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalCardTitleProps } from "./Modal.types";

const ModalCardTitle: React.FC<ModalCardTitleProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"p">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <p
      data-testid="ModalCardTitle"
      className={`modal-card-title ${classNames}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default ModalCardTitle;
