import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./Navbar";
import NavbarBrand from "./NavbarBrand";
import NavbarDropdown from "./NavbarDropdown";
import NavbarItemAnchor from "./NavbarItemAnchor";
import NavbarItemDiv from "./NavbarItemDiv";
import NavbarLink from "./NavbarLink";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuStart from "./NavbarMenuStart";
import NavbarMenuEnd from "./NavbarMenuEnd";
import NavbarItemCustom from "./NavbarItemCustom";
import {
  NavbarProps,
  NavbarBrandProps,
  NavbarDropdownProps,
  NavbarItemAnchorProps,
  NavbarItemDivProps,
  NavbarLinkProps,
  NavbarMenuProps,
  NavbarMenuStartProps,
  NavbarMenuEndProps,
} from "./Navbar.types";

describe("Navbar Component", () => {
  const renderComponent = (props: NavbarProps) => render(<Navbar {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Navbar");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Brand Component", () => {
  const renderComponent = (props: NavbarBrandProps) =>
    render(<NavbarBrand {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarBrand");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Burger Component", () => {
  const renderComponent = (props: NavbarDropdownProps) =>
    render(<NavbarDropdown {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarDropdown");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Item Anchor Component", () => {
  const renderComponent = (props: NavbarItemAnchorProps) =>
    render(<NavbarItemAnchor {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarItemAnchor");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Item Div Component", () => {
  const renderComponent = (props: NavbarItemDivProps) =>
    render(<NavbarItemDiv {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarItemDiv");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Link Component", () => {
  const renderComponent = (props: NavbarLinkProps) =>
    render(<NavbarLink {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarLink");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Menu Component", () => {
  const renderComponent = (props: NavbarMenuProps) =>
    render(<NavbarMenu {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarMenu");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Menu Start Component", () => {
  const renderComponent = (props: NavbarMenuStartProps) =>
    render(<NavbarMenuStart {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarMenuStart");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Menu End Component", () => {
  const renderComponent = (props: NavbarMenuEndProps) =>
    render(<NavbarMenuEnd {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarMenuEnd");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Navbar Item Custom Component", () => {
  const CustomComponent = NavbarItemCustom(NavbarLink);
  const renderComponent = (props: NavbarLinkProps) =>
    render(<CustomComponent {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("NavbarItemCustom");

    expect(component).toHaveTextContent(expected);
  });
});
