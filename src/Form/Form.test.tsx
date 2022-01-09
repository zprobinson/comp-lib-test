
import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";
import { FormProps } from "./Form.types";

describe("Form Component", () => {
  const renderComponent = (props: FormProps) => render(<Form {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Form");

    expect(component).toHaveTextContent(expected);
  });
});
