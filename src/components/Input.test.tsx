import { describe, expect, test } from "vitest";
import { render } from "../TestsWrapper";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  test("can be found by accessible label", () => {
    const labelText = "First name";
    render(<Input label={labelText} id="id" />);

    screen.getByLabelText(labelText);
  });

  test("can be found by placeholder", () => {
    const placeholderText = "First name";
    render(<Input label="Test" placeholder={placeholderText} id="id" />);

    screen.getByPlaceholderText(placeholderText);
  });

  test("can type inside of it", async () => {
    const labelText = "First name";
    const typedText = "John";

    render(<Input label={labelText} id="id" />);

    const input = screen.getByLabelText(labelText);
    await userEvent.type(input, typedText);

    expect(input).toHaveProperty("value", typedText);
  });

  test("cannot type if input is disabled", async () => {
    const labelText = "First name";
    const typedText = "John";

    render(<Input label={labelText} id="id" disabled />);

    const input = screen.getByLabelText(labelText);
    await userEvent.type(input, typedText);

    expect(input).toHaveProperty("value", "");
  });
});
