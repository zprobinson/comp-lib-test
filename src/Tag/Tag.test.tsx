import React from "react";
import { render } from "@testing-library/react";

import Tag from "./Tag";
import Tags from "./Tags";
import { TagProps } from "./Tag.types";
import { TagsProps } from "./Tags.types";

describe("Tag Component", () => {
  const renderComponent = (props: TagProps) => render(<Tag {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Tags Component", () => {
  const renderComponent = (props: TagsProps) => render(<Tags {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tags");

    expect(component).toHaveTextContent(expected);
  });
});
