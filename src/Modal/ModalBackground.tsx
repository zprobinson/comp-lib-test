import React from "react";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { ModalBackgroundProps } from "./Modal.types";

const ModalBackground: React.VFC<ModalBackgroundProps> = ({ ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="ModalBackground"
      className={`modal-background ${classNames}`}
      {...rest}
    ></div>
  );
};

export default ModalBackground;
