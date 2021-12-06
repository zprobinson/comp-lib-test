import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { MessageBodyProps } from "./Message.types";

const MessageBody: React.FC<MessageBodyProps> = ({ children, ...props }) => {
  const { bulmaProps, componentProps } = partitionBulmaComponentProps<"div">(
    props
  );
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return (
    <div
      data-testid="MessageBody"
      className={`message-body ${classNames}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MessageBody;
