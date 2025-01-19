import { Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router";
import { Link as RadixLink } from "@radix-ui/themes";
import Logo from "../../atoms/Logo";

type Props = {};

export default function LogoLink({}: Props) {
  return (
    <Flex asChild align="center">
      <RadixLink asChild underline="none" color="gray" highContrast>
        <Link to="/">
          <Flex
            display="inline-flex"
            align="center"
            maxWidth="3rem"
            as="span"
            mr="1"
          >
            <Logo />
          </Flex>
          <Text>NOVUS</Text>
        </Link>
      </RadixLink>
    </Flex>
  );
}
