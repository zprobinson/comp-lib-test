import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalCardBodyProps } from "./Modal.types";

const ModalCardBody: React.FC<ModalCardBodyProps> = ({
  children,
  ...props
}) => {
  const {
    bulmaProps,
    componentProps,
  } = partitionBulmaComponentProps<"section">(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <section
      data-testid="ModalCardBody"
      className={`modal-card-body ${classNames}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default ModalCardBody;
