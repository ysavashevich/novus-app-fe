import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "../components/atoms/Logo";
import "@testing-library/jest-dom/vitest";

describe("temp", () => {
  it("temp", () => {
    expect(0).toBeFalsy();

    render(<Logo />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
