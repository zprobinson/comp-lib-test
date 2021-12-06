// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";
import CardHeader from "./CardHeader";
import CardHeaderTitle from "./CardHeaderTitle";
import CardHeaderIcon from "./CardHeaderIcon";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardFooterItem from "./CardFooterItem";
import {
  CardContentProps,
  CardFooterItemProps,
  CardFooterProps,
  CardHeaderIconProps,
  CardHeaderProps,
  CardHeaderTitleProps,
  CardImageProps,
  CardProps,
} from "./Card.types";

describe("Card Component", () => {
  const renderComponent = (props: CardProps) => render(<Card {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Card");

    expect(component).toHaveTextContent(expected);
  });

  describe("Card Header Component", () => {
    const renderComponent = (props: CardHeaderProps) =>
      render(<CardHeader {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({ children: expected });

      const component = getByTestId("CardHeader");

      expect(component).toHaveTextContent(expected);
    });
  });

  describe("Card Header Title Component", () => {
    const renderComponent = (props: CardHeaderTitleProps) =>
      render(<CardHeaderTitle {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({ children: expected });

      const component = getByTestId("CardHeaderTitle");

      expect(component).toHaveTextContent(expected);
    });
  });

  describe("Card Header Icon Component", () => {
    const renderComponent = (props: CardHeaderIconProps) =>
      render(<CardHeaderIcon {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({ children: expected });

      const component = getByTestId("CardHeaderIcon");

      expect(component).toHaveTextContent(expected);
    });
  });

  describe("Card Image Component", () => {
    const renderComponent = (props: CardImageProps) =>
      render(<CardImage {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({ children: expected });

      const component = getByTestId("CardImage");

      expect(component).toHaveTextContent(expected);
    });
  });

  describe("Card Content Component", () => {
    const renderComponent = (props: CardContentProps) =>
      render(<CardContent {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({ children: expected });

      const component = getByTestId("CardContent");

      expect(component).toHaveTextContent(expected);
    });
  });

  describe("Card Footer Component", () => {
    const renderComponent = (props: CardFooterProps) =>
      render(<CardFooter {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({ children: expected });

      const component = getByTestId("CardFooter");

      expect(component).toHaveTextContent(expected);
    });
  });

  describe("Card Footer Item Component", () => {
    const renderComponent = (props: CardFooterItemProps) =>
      render(<CardFooterItem {...props} />);

    it("should render children correctly", () => {
      const expected = "harvey was here";
      const { getByTestId } = renderComponent({
        children: expected,
      });

      const component = getByTestId("CardFooterItem");

      expect(component).toHaveTextContent(expected);
    });
  });
});
