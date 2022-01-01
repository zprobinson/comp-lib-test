import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalCardFooterProps } from "./Modal.types";

const ModalCardFooter: React.FC<ModalCardFooterProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"footer">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <footer
      data-testid="ModalCardFooter"
      className={`modal-card-foot ${classNames}`}
      {...rest}
    >
      {children}
    </footer>
  );
};

export default ModalCardFooter;
