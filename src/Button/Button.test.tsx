import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";
import Button2 from "./Button2";
import { ButtonProps } from "./Button.types";

describe("Button Component", () => {
  const renderComponent = (props: ButtonProps) => render(<Button {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      onClick: () => {},
    });

    const component = getByTestId("Button");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const button = getByTestId("Button");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("Button2 Component", () => {
  const renderComponent = (props: ButtonProps) =>
    render(<Button2 {...props} />);

  it("should render children text correctly", () => {
    const expected = "harvey was here";
    const { getByTestId, debug } = renderComponent({
      children: expected,
      onClick: () => {},
      justifyContent: "is-justify-content-center",
      className: "hello-world",
    });

    const component = getByTestId("Button");
    debug(component);

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const button = getByTestId("Button");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
