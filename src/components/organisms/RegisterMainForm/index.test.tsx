import { test, expect, describe, afterEach, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import RegisterMainForm from "./index";
import "@testing-library/jest-dom/vitest";
import { renderWithProviders } from "../../../utils/test-utils";

afterEach(cleanup);

const mockRegister = vi.fn((user) => {
  return Promise.resolve(user);
});

describe("register main form", () => {
  test("render", async () => {
    renderWithProviders(
      <RegisterMainForm
        submitHandler={mockRegister}
        isLoading={false}
        errorMessage={null}
        userType="business"
      />
    );

    expect(screen.getByTestId("main-form")).toBeInTheDocument();
  });

  test("should display errors for every field", async () => {
    renderWithProviders(
      <RegisterMainForm
        submitHandler={mockRegister}
        isLoading={false}
        errorMessage={null}
        userType="business"
      />
    );

    const btn = screen.getByRole("button");

    fireEvent.submit(btn);

    expect(await screen.findAllByRole("alert")).toHaveLength(4);
    expect(mockRegister).not.toBeCalled();
  });

  test("should validate email", async () => {
    renderWithProviders(
      <RegisterMainForm
        submitHandler={mockRegister}
        isLoading={false}
        errorMessage={null}
        userType="business"
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
    expect(mockRegister).not.toBeCalled();
  });

  test("should validate password", async () => {
    renderWithProviders(
      <RegisterMainForm
        submitHandler={mockRegister}
        isLoading={false}
        errorMessage={null}
        userType="business"
      />
    );
    const btn = screen.getByRole("button");

    fireEvent.input(screen.getByLabelText("Password"), {
      target: {
        value: "999999999",
      },
    });

    fireEvent.submit(btn);

    expect(await screen.findByTestId("password-msg")).toBeInTheDocument();
    expect(mockRegister).not.toBeCalled();
  });

  test("should validate phone number", async () => {
    renderWithProviders(
      <RegisterMainForm
        submitHandler={mockRegister}
        isLoading={false}
        errorMessage={null}
        userType="business"
      />
    );
    const btn = screen.getByRole("button");

    fireEvent.input(screen.getByLabelText("Phone number"), {
      target: {
        value: "789a",
      },
    });

    fireEvent.submit(btn);

    expect(await screen.findByTestId("phoneNumber-msg")).toBeInTheDocument();
    expect(mockRegister).not.toBeCalled();
  });

  test("should submit", async () => {
    renderWithProviders(
      <RegisterMainForm
        submitHandler={mockRegister}
        isLoading={false}
        errorMessage={null}
        userType="business"
      />
    );

    const btn = screen.getByRole("button");

    fireEvent.input(screen.getByLabelText("Email"), {
      target: {
        value: "john@gmail.com",
      },
    });
    fireEvent.input(screen.getByLabelText("Full name"), {
      target: {
        value: "John Doe",
      },
    });
    fireEvent.input(screen.getByLabelText("Phone number"), {
      target: {
        value: "9029492949",
      },
    });
    fireEvent.input(screen.getByLabelText("Password"), {
      target: {
        value: "7489357589jkd_P",
      },
    });

    fireEvent.submit(btn);

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));
    expect(mockRegister).toBeCalled();
  });
});
