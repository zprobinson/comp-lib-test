import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Tabs from "./Tabs";
import TabsLink from "./TabsLink";
import TabsList from "./TabsList";
import TabsListItem from "./TabsListItem";
import {
  TabsProps,
  TabsLinkProps,
  TabsListProps,
  TabsListItemProps,
} from "./Tabs.types";

describe("Tabs Component", () => {
  const renderComponent = (props: TabsProps) => render(<Tabs {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Tabs");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Tabs Link Component", () => {
  const renderComponent = (props: TabsLinkProps) =>
    render(<TabsLink {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      isActive: true,
      textColor: "has-text-danger",
      innerListItemProps: {
        className: "foo-bar",
      },
    });

    const component = getByTestId("TabsLink");

    expect(component).toHaveTextContent(expected);
  });

  it("should recognize a single click", () => {
    const onClick = jest.fn();
    const { getByTestId } = renderComponent({ onClick });

    const component = getByTestId("TabsLink");
    fireEvent.click(component.querySelector("a"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("Tabs List Component", () => {
  const renderComponent = (props: TabsListProps) =>
    render(<TabsList {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("TabsList");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Tabs List Item Component", () => {
  const renderComponent = (props: TabsListItemProps) =>
    render(<TabsListItem {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("TabsListItem");

    expect(component).toHaveTextContent(expected);
  });
});
