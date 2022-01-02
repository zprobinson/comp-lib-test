import React from "react";
import { render } from "@testing-library/react";

import Block from "./Block";
import Block2 from "./Block2";
import { Block2Props, BlockProps } from "./Block.types";

describe("Block Component", () => {
  const renderComponent = (props: BlockProps) => render(<Block {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Block");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Block2 Component", () => {
  const renderComponent = (props: BlockProps) => render(<Block2 {...props} />);

  it("should render foo text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId, debug } = renderComponent({
      children: expected,
      className: "foo-bar baz",
      justifyContent: "is-justify-content-center",
    });

    const component = getByTestId("Block");
    debug(component);

    expect(component).toHaveTextContent(expected);
  });
});
