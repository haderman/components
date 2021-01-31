import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./button.component";

describe("<Component />", () => {
  test("rendered text", () => {
    render(<Button />);
    expect(screen.getByText("hola")).toBeDefined();
  });
});
