import { test, expect, describe, afterEach, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import LoginForm from "./index";
import "@testing-library/jest-dom/vitest";
import { renderWithProviders } from "../../../utils/test-utils";

afterEach(cleanup);

const mockLogin = vi.fn((user) => {
  return Promise.resolve(user);
});

describe("login form", () => {
  test("render", async () => {
    renderWithProviders(
      <LoginForm
        submitHandler={mockLogin}
        isLoading={false}
        errorMessage={null}
      />,
      {}
    );

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });

  test("should display errors for every field", async () => {
    renderWithProviders(
      <LoginForm
        submitHandler={mockLogin}
        isLoading={false}
        errorMessage={null}
      />
    );

    const btn = screen.getByRole("button");

    fireEvent.submit(btn);

    expect(await screen.findAllByRole("alert")).toHaveLength(2);
  });

  test("should validate email", async () => {
    renderWithProviders(
      <LoginForm
        submitHandler={mockLogin}
        isLoading={false}
        errorMessage={null}
      />
    );
    const btn = screen.getByRole("button");

    fireEvent.input(screen.getByLabelText("Email"), {
      target: {
        value: "testmail.com",
      },
    });

    fireEvent.submit(btn);

    expect(await screen.findByTestId("email-msg")).toBeInTheDocument();
  });

  test("should require password", async () => {
    renderWithProviders(
      <LoginForm
        submitHandler={mockLogin}
        isLoading={false}
        errorMessage={null}
      />
    );
    const btn = screen.getByRole("button");

    fireEvent.input(screen.getByLabelText("Password"), {
      target: {
        value: "",
      },
    });

    fireEvent.submit(btn);

    expect(await screen.findByTestId("password-msg")).toBeInTheDocument();
  });

  test("should submit", async () => {
    renderWithProviders(
      <LoginForm
        submitHandler={mockLogin}
        isLoading={false}
        errorMessage={null}
      />
    );

    const btn = screen.getByRole("button");

    fireEvent.input(screen.getByLabelText("Email"), {
      target: {
        value: "john@gmail.com",
      },
    });
    fireEvent.input(screen.getByLabelText("Password"), {
      target: {
        value: "7489357589jkd_P",
      },
    });

    fireEvent.submit(btn);

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockLogin).toBeCalled();
  });
});
