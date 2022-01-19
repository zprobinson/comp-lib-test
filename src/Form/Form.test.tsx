import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Form from "./Form";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormControl from "./FormControl";
import {
  FormCheckboxProps,
  FormControlProps,
  FormInputProps,
  FormProps,
} from "./Form.types";
import { testBulmaProps } from "../bulmaTests/bulmaTests";

describe("Form Component", () => {
  const renderComponent = (props: FormProps) => render(<Form {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("Form");

    expect(component).toHaveTextContent(expected);
  });
});

describe("Form Input Component", () => {
  const renderComponent = (props: FormInputProps) =>
    render(<FormInput {...props} />);

  it("should render size class", () => {
    const expected: FormInputProps["size"] = "is-large";
    const { getByTestId } = renderComponent({ size: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render color class", () => {
    const expected: FormInputProps["color"] = "is-danger";
    const { getByTestId } = renderComponent({ color: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render is-static class", () => {
    const value: FormInputProps["isStatic"] = true;
    const expected = "is-static";

    const { getByTestId } = renderComponent({ isStatic: value });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render is-loading class", () => {
    const value: FormInputProps["isLoading"] = true;
    const expected = "is-loading";

    const { getByTestId } = renderComponent({ isLoading: value });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render is-rounded class", () => {
    const value: FormInputProps["isRounded"] = true;
    const expected = "is-rounded";

    const { getByTestId } = renderComponent({ isRounded: value });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  it("should render state class", () => {
    const expected: FormInputProps["state"] = "is-focused";

    const { getByTestId } = renderComponent({ state: expected });

    const component = getByTestId("FormInput");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("FormInput", renderComponent);
});

describe("Form Checkbox Component", () => {
  const renderComponent = (props: FormCheckboxProps) =>
    render(<FormCheckbox {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveTextContent(expected);
  });

  it("should be checked when clicked", () => {
    const { getByTestId } = renderComponent({});

    const component = getByTestId("FormCheckbox");

    expect(component).not.toBeChecked();

    fireEvent.click(component);

    expect(component).toBeChecked();
  });

  it("should contain classNames on checkbox when _innerCheckboxClassName is passed", () => {
    const expected = "foo bar-baz";
    const { getByTestId } = renderComponent({
      _innerCheckboxClassName: expected,
    });

    const component = getByTestId("FormCheckbox");

    expect(component).toHaveClass(expected);
  });

  it("should have style on checkbox label when _innerDisabledColor is passed and disabled is true", () => {
    const expected = "red";
    const { getByTestId } = renderComponent({
      disabled: true,
      _innerDisabledColor: expected,
    });

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveStyle({
      cursor: "not-allowed",
      color: expected,
    });
  });

  it("should have no style on checkbox label when _innerDisabledColor is passed and disable is false", () => {
    const redHerring = "red";
    const { getByTestId } = renderComponent({
      disabled: false,
      _innerDisabledColor: redHerring,
    });

    const component = getByTestId("FormCheckboxLabel");

    expect(component).toHaveStyle({
      cursor: "default",
      color: undefined,
    });
  });

  testBulmaProps("FormCheckboxLabel", renderComponent);
});

describe("Form Control Component", () => {
  const renderComponent = (props: FormControlProps) =>
    render(<FormControl {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("FormControl");

    expect(component).toHaveTextContent(expected);
  });

  it("should have one iconAlignment class", () => {
    const expected: FormControlProps["iconAlignment"] = "has-icons-left";
    const { getByTestId } = renderComponent({ iconAlignment: expected });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have multiple iconAlignment class", () => {
    const iconAlignment: FormControlProps["iconAlignment"] = [
      "has-icons-left",
      "has-icons-right",
    ];
    const expected = "has-icons-left has-icons-right";
    const { getByTestId } = renderComponent({ iconAlignment });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have is-fullwidth class", () => {
    const isFullwidth: FormControlProps["isFullwidth"] = true;
    const expected = "is-fullwidth";
    const { getByTestId } = renderComponent({ isFullwidth });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  it("should have is-loading class", () => {
    const isLoading: FormControlProps["isLoading"] = true;
    const expected = "is-loading";
    const { getByTestId } = renderComponent({ isLoading });

    const component = getByTestId("FormControl");

    expect(component).toHaveClass(expected);
  });

  testBulmaProps("FormControl", renderComponent);
});
