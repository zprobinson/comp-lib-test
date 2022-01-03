import React from "react";
import { fireEvent, render } from "@testing-library/react";

import TagAnchor from "./TagAnchor";
import TagSpan from "./TagSpan";
import Tags from "./Tags";
import { TagAnchorProps, TagSpanProps } from "./Tag.types";
import { TagsProps } from "./Tags.types";

describe("Tag Anchor Component", () => {
  const renderComponent = (props: TagAnchorProps) =>
    render(<TagAnchor {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const component = getByTestId("Tag");
    fireEvent.click(component);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should be able to contain an href attribute", () => {
    const href = "www.test-href.com";
    const { getByTestId } = renderComponent({ href });

    const component = getByTestId("Tag");

    expect(component).toHaveAttribute("href", href);
  });
});

describe("Tag Span Component", () => {
  const renderComponent = (props: TagSpanProps) =>
    render(<TagSpan {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tag");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const button = getByTestId("Tag");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
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
