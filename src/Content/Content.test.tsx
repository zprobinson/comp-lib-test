import React from "react";
import { render } from "@testing-library/react";

import Content from "./Content";
import { ContentProps } from "./Content.types";

describe("Test Component", () => {
  const renderComponent = (props: ContentProps) =>
    render(<Content {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Content");

    expect(component).toHaveTextContent(expected);
  });
});
