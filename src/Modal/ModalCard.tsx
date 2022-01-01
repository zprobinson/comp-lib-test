import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalCardProps } from "./Modal.types";

const ModalCard: React.FC<ModalCardProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="ModalCard"
      className={`modal-card ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModalCard;
