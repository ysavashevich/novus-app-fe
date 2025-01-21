import { Outlet } from "react-router";
import AuthScreen from "../../components/organisms/AuthScreen";

export default function RegisterPage() {
  return (
    <AuthScreen>
      <Outlet />
    </AuthScreen>
  );
}
