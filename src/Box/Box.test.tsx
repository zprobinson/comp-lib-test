// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Box from "./Box";
import { BoxProps } from "./Box.types";

describe("Test Component", () => {
  let props: BoxProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Box {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Box");

    expect(component).toHaveTextContent("harvey was here");
  });
});
