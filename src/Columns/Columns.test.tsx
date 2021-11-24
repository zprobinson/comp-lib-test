// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Columns from "./Columns";
import { ColumnsProps } from "./Columns.types";

describe("Columns Component", () => {
  const renderComponent = (props: ColumnsProps) =>
    render(<Columns {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Columns");

    expect(component).toHaveTextContent(expected);
  });
});
