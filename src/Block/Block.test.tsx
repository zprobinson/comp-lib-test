// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Block from "./Block";
import { BlockProps } from "./Block.types";

describe("Test Component", () => {
  let props: BlockProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Block {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Block");

    expect(component).toHaveTextContent("harvey was here");
  });
});
