import { Heading, Text } from "@radix-ui/themes";
import AuthScreen from "../../components/organisms/AuthScreen";
import { useAppSelector } from "../../store/hooks";
import { selectDidRegister } from "../../store/registerSlice";
import LoginForm from "../../components/organisms/LoginForm";
import { useEffect } from "react";
import { useLoginMutation } from "../../store/apiSlice";
import { useNavigate } from "react-router";
import useReduxError from "../../hooks/useReduxError";

export default function LoginPage() {
  const navigate = useNavigate();

  const didRegister = useAppSelector(selectDidRegister);

  const [loginUser, { isLoading, isSuccess, error }] = useLoginMutation();

  const reduxError = useReduxError(error);

  useEffect(() => {
    if (isSuccess) navigate("/dashboard");
  }, [isSuccess, navigate]);

  return (
    <AuthScreen>
      {didRegister ? (
        <>
          <Heading as="h2" size="7" align="left" mb="4">
            Good!
          </Heading>
          <Text as="p" align="left" size="3" mb="4">
            You've successfully registered and can now log in!
          </Text>
        </>
      ) : (
        <>
          <Heading as="h2" size="7" align="left" mb="4">
            Welcome back!
          </Heading>
          <Text as="p" align="left" size="3" mb="4">
            Fill in some details to log in.
          </Text>
        </>
      )}
      <LoginForm
        submitHandler={loginUser}
        isLoading={isLoading}
        errorMessage={reduxError}
      />
    </AuthScreen>
  );
}
