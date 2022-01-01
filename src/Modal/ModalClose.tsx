import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalCloseProps } from "./Modal.types";

const ModalClose: React.VFC<ModalCloseProps> = ({
  size = "is-large",
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"button">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", size, helpers]);

  return (
    <button
      data-testid="ModalClose"
      className={`modal-close ${classNames}`}
      {...rest}
    ></button>
  );
};

export default ModalClose;
