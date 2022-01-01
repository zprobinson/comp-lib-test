import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalContentProps } from "./Modal.types";

const ModalContent: React.FC<ModalContentProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="ModalContent"
      className={`modal-content ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ModalContent;
