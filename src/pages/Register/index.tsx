import { Outlet } from "react-router";
import RegisterScreen from "../../components/organisms/RegisterScreen";

export default function RegisterPage() {
  return (
    <RegisterScreen>
      <Outlet />
    </RegisterScreen>
  );
}
