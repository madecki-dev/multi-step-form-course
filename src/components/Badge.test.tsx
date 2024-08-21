import { describe, test } from "vitest";
import { render } from "../TestsWrapper";
import { screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  test("displaying text inside of it", () => {
    const badgeText = "Hello";
    render(<Badge text={badgeText} />);

    screen.getByText(badgeText);
  });
});
