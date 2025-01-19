import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../components/atoms/Input";
import "@testing-library/jest-dom/vitest";

describe("temp", () => {
  it("temp", () => {
    expect(0).toBeFalsy();

    const testMessage = "Test Message";

    render(<Input>{testMessage}</Input>);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
