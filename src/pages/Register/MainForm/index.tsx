import RegisterMainForm from "../../../components/organisms/RegisterMainForm";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Link } from "@radix-ui/themes";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectUserType, userRegistered } from "../../../store/registerSlice";
import { useRegisterMutation } from "../../../store/apiSlice";
import useReduxError from "../../../hooks/useReduxError";

export default function MainFormPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userType = useAppSelector(selectUserType);

  const [registerUser, { isLoading, isSuccess, error }] = useRegisterMutation();

  const reduxError = useReduxError(error);

  useEffect(() => {
    if (!userType) {
      navigate("/register/user-type");
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(userRegistered());
      navigate("/login");
    }
  }, [isSuccess, navigate, dispatch]);
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
      <RegisterMainForm
        submitHandler={registerUser}
        isLoading={isLoading}
        errorMessage={reduxError}
        userType={userType}
      />
    </>
  );
}
