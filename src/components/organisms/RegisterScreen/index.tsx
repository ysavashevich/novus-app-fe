import { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import LogoLink from "../../molecules/LogoLink";
import {
  ActivityLogIcon,
  GroupIcon,
  ShadowInnerIcon,
} from "@radix-ui/react-icons";

type Props = {
  children: ReactNode;
};

export default function RegisterScreen({ children }: Props) {
  return (
    <Flex
      direction={{ initial: "column", md: "row" }}
      align="center"
      width="100%"
      height="100%"
    >
      <Flex
        direction="column"
        width="100%"
        maxWidth="34rem"
        maxHeight="100vh"
        minHeight={{ md: "100vh" }}
        height="100%"
        p="4"
      >
        <LogoLink />
        <Flex
          p="8"
          width="100%"
          height="100%"
          flexGrow="1"
          display={{ initial: "none", md: "flex" }}
        >
          <Box width="100%" height="100%" pt="9">
            <Heading as="h1" size="8" align="left">
              Revolutionize Your Finances with Novus
            </Heading>
            <Text as="p" align="left" mb="2">
              Designed to simplify your financial life, Novus combines
              cutting-edge technology with effortless usability.
            </Text>
            <Flex asChild align="center" gapX="1">
              <Text as="p" align="left" color="plum" mb="1">
                <ShadowInnerIcon />
                Lorem Ipsum
              </Text>
            </Flex>
            <Flex asChild align="center" gapX="1">
              <Text as="p" align="left" color="lime" mb="1">
                <GroupIcon />
                Lorem Ipsum
              </Text>
            </Flex>
            <Flex asChild align="center" gapX="1">
              <Text as="p" align="left" color="sky" mb="1">
                <ActivityLogIcon />
                Lorem Ipsum
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex p="8" align="center" justify="center" width="100%" height="100%">
        <Box maxWidth="32rem" width="100%">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
