import { describe, expect, test } from "vitest";
import { render } from "../../TestsWrapper";
import BusinessAddress from "./BusinessStructure/Address/BusinessAddress";
import { screen } from "@testing-library/react";

describe("Verification form", () => {
  describe("Business structure", () => {
    describe("BusinessAddress", () => {
      test("should display all required fields", () => {
        render(<BusinessAddress />);

        expect(
          screen.getByLabelText("Registered business address")
        ).toBeDefined();
        screen.getByLabelText("Type of business");
        screen.getByLabelText("Address line 1");
        screen.getByLabelText("Address line 2");
        screen.getByLabelText("City");
        screen.getByLabelText("Zip");
      });
    });
  });
});
