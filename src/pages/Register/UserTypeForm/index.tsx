import RegisterUserTypeForm from "../../../components/organisms/RegisterUserTypeForm";
import { Heading, Text } from "@radix-ui/themes";

export default function UserTypeFormPage() {
  return (
    <>
      <Heading as="h2" size="7" align="left" mb="4">
        Welcome!
      </Heading>
      <Text as="p" align="left" size="3" mb="4">
        Tell us about your goals so that we can get you to the right place.
      </Text>
      <RegisterUserTypeForm />
    </>
  );
}
