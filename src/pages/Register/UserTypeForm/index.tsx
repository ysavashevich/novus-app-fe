import RegisterUserTypeForm from "../../../components/organisms/RegisterUserTypeForm";
import { Heading, Text } from "@radix-ui/themes";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectUserType, userTypeChosen } from "../../../store/registerSlice";
import { useNavigate } from "react-router";

export default function UserTypeFormPage() {
  const userType = useAppSelector(selectUserType);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (value: string) => {
    dispatch(userTypeChosen(value));
    navigate("/register/form");
  };

  return (
    <>
      <Heading as="h2" size="7" align="left" mb="4">
        Welcome!
      </Heading>
      <Text as="p" align="left" size="3" mb="4">
        Tell us about your goals so that we can get you to the right place.
      </Text>
      <RegisterUserTypeForm
        submitHandler={submitHandler}
        defaultUserType={userType}
      />
    </>
  );
}
