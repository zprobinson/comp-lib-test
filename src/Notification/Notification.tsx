import React from "react";
import { Delete } from "..";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { NotificationProps } from "./Notification.types";

const Notification: React.FC<NotificationProps> = ({
  children,
  onClose,
  color,
  deleteProps,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", color ?? "", helpers]);

  return (
    <div
      data-testid="Notification"
      className={`notification ${classNames}`}
      {...rest}
    >
      <Delete
        data-testid="NotificationDelete"
        onClick={onClose}
        {...deleteProps}
      />
      {children}
    </div>
  );
};

export default Notification;
