import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  const renderComponent = (props: ButtonProps) => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      onClick: () => {},
    });

    const component = getByTestId("Button");

    expect(component).toHaveTextContent(expected);
  });
});
