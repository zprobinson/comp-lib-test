import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";
import Subtitle from "./Subtitle";
import { SubtitleProps, TitleProps } from "./Title.types";

describe("Title", () => {
  const renderComponent = (props: TitleProps) => render(<Title {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Title");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Subitle", () => {
  const renderComponent = (props: SubtitleProps) =>
    render(<Subtitle {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Subtitle");

    expect(component).toHaveTextContent(expected);
  });
});
