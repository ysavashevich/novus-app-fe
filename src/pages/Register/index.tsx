import { Outlet } from "react-router";
import RegisterScreen from "../../components/organisms/RegisterScreen";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <RegisterScreen>
      <Outlet />
    </RegisterScreen>
  );
}
