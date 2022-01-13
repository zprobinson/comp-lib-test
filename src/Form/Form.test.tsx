import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";
import FormInput, { BulmaFormInputWithRef } from "./FormInput";
import { FormInputProps, FormProps } from "./Form.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";
import { BulmaComponentPropsWithRef } from "../types";

describe("Form Component", () => {
  const renderComponent = (props: FormProps) => render(<Form {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Form");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Form Input Component", () => {
  const renderComponent = (props: FormInputProps) =>
    render(<BulmaFormInputWithRef {...props} />);

  it("should render size class", () => {
    const expected: FormInputProps["size"] = "is-large";
    const { getByTestId } = renderComponent({ size: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("FormInput", renderComponent);
});
