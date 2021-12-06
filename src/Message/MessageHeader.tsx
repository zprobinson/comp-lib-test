import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { MessageHeaderProps } from "./Message.types";

const MessageHeader: React.FC<MessageHeaderProps> = ({
  children,
  ...props
}) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="MessageHeader"
      className={`message-header ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MessageHeader;
