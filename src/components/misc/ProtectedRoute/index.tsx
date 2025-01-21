import { useSelector } from "react-redux";
import { selectUserObject } from "../../../store/userSlice";
import { NavLink, Outlet } from "react-router";
import { Box, Heading, Link } from "@radix-ui/themes";

export default function ProtectedRoute() {
  const userObj = useSelector(selectUserObject);

  if (!userObj) {
    return (
      <Box>
        <Heading as="h1">Unauthorized...</Heading>
        <Link asChild>
          <NavLink to="/login">Login</NavLink>
        </Link>
      </Box>
    );
  }

  return <Outlet />;
}
