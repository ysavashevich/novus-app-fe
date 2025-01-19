import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import Input from "../../atoms/Input";
import { Button, Flex } from "@radix-ui/themes";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  DIGIT_REGEX,
  LOWERCASE_REGEX,
  NON_WORD_CHAR_REGEX,
  UNDERSCORE_REGEX,
  UPPERCASE_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
} from "../../../constants/regex";
import { useAppSelector } from "../../../store/hooks";
import { selectUserType } from "../../../store/registerSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";

type Props = {};

export default function RegisterMainForm({}: Props) {
  const userType = useAppSelector(selectUserType);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = () => {};

  useEffect(() => {
    if (!userType) {
      navigate("/register/user-type");
    }
  }, [userType]);

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%", display: "block" }}
    >
      <Input
        label="Full name"
        error={errors.fullName?.message}
        {...register("fullName", { required: "This field is required." })}
      />
      <Input
        label="Email"
        error={errors.email?.message}
        {...register("email", {
          required: "This field is required.",
          pattern: { value: EMAIL_REGEX, message: "Enter a correct email." },
        })}
      />
      <Input
        label="Phone number"
        error={errors.phoneNumber?.message}
        {...register("phoneNumber", {
          required: "This field is required.",
          pattern: {
            value: PHONE_REGEX,
            message: "Enter a correct phone number.",
          },
        })}
      />
      <Input
        label="Password"
        type="password"
        error={errors.password?.message}
        {...register("password", {
          validate: (str) => {
            if (!LOWERCASE_REGEX.test(str))
              return "Password should contain a lowercase character.";
            if (!UPPERCASE_REGEX.test(str))
              return "Password should contain an uppercase character.";
            if (!DIGIT_REGEX.test(str))
              return "Password should contain a digit.";
            if (!(NON_WORD_CHAR_REGEX.test(str) || UNDERSCORE_REGEX.test(str)))
              return "Password should contain a special character.";
            if (str.length < 8)
              return "Password should be at least 8 characters long.";
          },
        })}
      />
      <Form.Submit asChild>
        <Button type="submit">
          <Flex as="span" align="end" justify="center">
            <PaperPlaneIcon />
          </Flex>{" "}
          <span>Submit</span>
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}
