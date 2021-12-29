import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";
import DropdownAnchor from "./DropdownAnchor";
import DropdownContent from "./DropdownContent";
import DropdownDiv from "./DropdownDiv";
import DropdownMenu from "./DropdownMenu";
import DropdownTrigger from "./DropdownTrigger";
import {
  DropdownAnchorProps,
  DropdownContentProps,
  DropdownDivProps,
  DropdownMenuProps,
  DropdownProps,
  DropdownTriggerProps,
} from "./Dropdown.types";

describe("Dropdown Component", () => {
  const renderComponent = (props: DropdownProps) =>
    render(<Dropdown {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Dropdown");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Dropdown Anchor Component", () => {
  const renderComponent = (props: DropdownAnchorProps) =>
    render(<DropdownAnchor {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownAnchor");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Dropdown Content Component", () => {
  const renderComponent = (props: DropdownContentProps) =>
    render(<DropdownContent {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownContent");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Dropdown Div Component", () => {
  const renderComponent = (props: DropdownDivProps) =>
    render(<DropdownDiv {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownDiv");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Dropdown Menu Component", () => {
  const renderComponent = (props: DropdownMenuProps) =>
    render(<DropdownMenu {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownMenu");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Dropdown Trigger Component", () => {
  const renderComponent = (props: DropdownTriggerProps) =>
    render(<DropdownTrigger {...props} />);

  it("should render children correctly", () => {
    const expected = "some text";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("DropdownTrigger");

    expect(component).toHaveTextContent(expected);
  });
});
