import RegisterMainForm from "../../../components/organisms/RegisterMainForm";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Link } from "@radix-ui/themes";
import { NavLink } from "react-router";

export default function MainFormPage() {
  return (
    <>
      <Flex>
        <Link asChild>
          <Flex
            display="inline-flex"
            align="center"
            justify="start"
            as="span"
            asChild
          >
            <NavLink to="/register/user-type">
              <Flex mr="1" as="span">
                <ArrowLeftIcon />
              </Flex>
              Back
            </NavLink>
          </Flex>
        </Link>
      </Flex>
      <Heading as="h2" size="7" align="left" mb="4" mt="2">
        Create your account
      </Heading>
      <RegisterMainForm />
    </>
  );
}
