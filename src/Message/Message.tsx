import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaComponentProps } from "../utilities/propUtilities";

import { MessageProps } from "./Message.types";

const Message: React.FC<MessageProps> = ({
  children,
  color,
  size,
  ...props
}) => {
  const {
    bulmaProps,
    componentProps,
  } = partitionBulmaComponentProps<"article">(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([
    className ?? "",
    color ?? "",
    size ?? "",
    helpers,
  ]);

  return (
    <article
      data-testid="Message"
      className={`message ${classNames}`}
      {...rest}
    >
      {children}
    </article>
  );
};

export default Message;
