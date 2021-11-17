// Generated with util/create-component.js
import React from "react";

import { BoxProps } from "./Box.types";

import "./Box.scss";

const Box: React.FC<BoxProps> = ({ foo }) => (
    <div data-testid="Box" className="foo-bar">{foo}</div>
);

export default Box;

