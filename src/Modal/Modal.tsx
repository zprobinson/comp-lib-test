import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalProps } from "./Modal.types";

const Modal: React.FC<ModalProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
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
    <div data-testid="Modal" className={`modal ${classNames}`} {...rest}>
      {children}
    </div>
  );
};

export default Modal;
