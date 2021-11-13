// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Columns from "./Columns";
import { ColumnsProps } from "./Columns.types";

describe("Test Component", () => {
  let props: ColumnsProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Columns {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Columns");

    expect(component).toHaveTextContent("harvey was here");
  });
});
