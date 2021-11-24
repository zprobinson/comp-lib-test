// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Column from "./Column";
import { ColumnProps } from "./Column.types";

describe("Column Component", () => {
  const renderComponent = (props: ColumnProps) => render(<Column {...props} />);

  it("should render text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Column");

    expect(component).toHaveTextContent(expected);
  });
});
