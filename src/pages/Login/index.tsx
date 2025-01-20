import { Heading, Text } from "@radix-ui/themes";
import AuthScreen from "../../components/organisms/AuthScreen";
import { useAppSelector } from "../../store/hooks";
import { selectDidRegister } from "../../store/registerSlice";
import LoginForm from "../../components/organisms/LoginForm";

export default function LoginPage() {
  const didRegister = useAppSelector(selectDidRegister);

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
      <LoginForm />
    </AuthScreen>
  );
}
