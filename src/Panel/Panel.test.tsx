import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Panel from "./Panel";
import PanelBlockAnchor from "./PanelBlockAnchor";
import PanelBlockDiv from "./PanelBlockDiv";
import PanelBlockLabel from "./PanelBlockLabel";
import PanelHeading from "./PanelHeading";
import PanelIcon from "./PanelIcon";
import PanelTab from "./PanelTab";
import PanelTabs from "./PanelTabs";
import {
  PanelProps,
  PanelBlockAnchorProps,
  PanelBlockDivProps,
  PanelBlockLabelProps,
  PanelHeadingProps,
  PanelIconProps,
  PanelTabProps,
  PanelTabsProps,
} from "./Panel.types";

describe("Panel Component", () => {
  const renderComponent = (props: PanelProps) => render(<Panel {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Panel");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Panel Block Div Component", () => {
  const renderComponent = (props: PanelBlockDivProps) =>
    render(<PanelBlockDiv {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelBlock");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Panel Block Anchor Component", () => {
  const renderComponent = (props: PanelBlockAnchorProps) =>
    render(<PanelBlockAnchor {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelBlock");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const component = getByTestId("PanelBlock");
    fireEvent.click(component);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("Panel Block Label Component", () => {
  const renderComponent = (props: PanelBlockLabelProps) =>
    render(<PanelBlockLabel {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelBlock");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const component = getByTestId("PanelBlock");
    fireEvent.click(component);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("Panel Heading Component", () => {
  const renderComponent = (props: PanelHeadingProps) =>
    render(<PanelHeading {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelHeading");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Panel Icon Component", () => {
  const renderComponent = (props: PanelIconProps) =>
    render(<PanelIcon {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelIcon");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Panel Tab Component", () => {
  const renderComponent = (props: PanelTabProps) =>
    render(<PanelTab {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelTab");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const component = getByTestId("PanelTab");
    fireEvent.click(component);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("Panel Tabs Component", () => {
  const renderComponent = (props: PanelTabsProps) =>
    render(<PanelTabs {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("PanelTabs");

    expect(component).toHaveTextContent(expected);
  });
});
