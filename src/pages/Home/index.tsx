import { NavLink } from "react-router";
import LogoLink from "../../components/molecules/LogoLink";
import { Box, Flex, Link } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <Flex align="center" justify="center" direction="column" height="100vh">
      <Box mb="2">
        <LogoLink />
      </Box>
      <Link asChild mb="2">
        <NavLink to="/register/user-type">Register</NavLink>
      </Link>
      <Link asChild mb="2">
        <NavLink to="/login">Login</NavLink>
      </Link>
      <Link asChild>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </Link>
    </Flex>
  );
}
