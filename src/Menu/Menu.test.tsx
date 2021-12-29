// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Menu from "./Menu";
import MenuLabel from "./MenuLabel";
import MenuLink from "./MenuLink";
import MenuList from "./MenuList";
import MenuListItem from "./MenuListItem";
import {
  MenuLabelProps,
  MenuLinkProps,
  MenuListItemProps,
  MenuListProps,
  MenuProps,
} from "./Menu.types";

describe("Menu Component", () => {
  const renderComponent = (props: MenuProps) => render(<Menu {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Menu");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Menu Label Component", () => {
  const renderComponent = (props: MenuLabelProps) =>
    render(<MenuLabel {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("MenuLabel");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Menu Link Component", () => {
  const renderComponent = (props: MenuLinkProps) =>
    render(<MenuLink {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      isActive: true,
    });

    const component = getByTestId("MenuLink");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Menu List Component", () => {
  const renderComponent = (props: MenuListProps) =>
    render(<MenuList {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("MenuList");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Menu List Item Component", () => {
  const renderComponent = (props: MenuListItemProps) =>
    render(<MenuListItem {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({
      children: expected,
      isActive: false,
    });

    const component = getByTestId("MenuListItem");

    expect(component).toHaveTextContent(expected);
  });
});
