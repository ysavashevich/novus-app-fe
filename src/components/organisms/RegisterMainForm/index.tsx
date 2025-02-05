import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import Input from "../../atoms/Input";
import { Button, Flex, Text } from "@radix-ui/themes";
import { CrossCircledIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  DIGIT_REGEX,
  LOWERCASE_REGEX,
  NON_WORD_CHAR_REGEX,
  UNDERSCORE_REGEX,
  UPPERCASE_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
} from "../../../constants/regex";
import { User } from "../../../store/apiSlice";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

type Props = {
  submitHandler: (user: User) => Promise<any>;
  errorMessage: string | null;
  isLoading: boolean;
  userType: string | null;
};

export default function RegisterMainForm({
  submitHandler,
  errorMessage,
  isLoading,
  userType,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    await submitHandler({ ...data, userType: userType! });
  };

  return (
    <Form.Root
      data-testid="main-form"
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
      {errorMessage && (
        <Flex mt="1" mb="2" align="center">
          <Flex mr="1">
            <CrossCircledIcon color="tomato" />
          </Flex>
          <Text color="tomato">{errorMessage}</Text>
        </Flex>
      )}
      <Form.Submit asChild>
        <Button type="submit" loading={isLoading}>
          <Flex as="span" align="end" justify="center">
            <PaperPlaneIcon />
          </Flex>{" "}
          <span>Submit</span>
        </Button>
      </Form.Submit>
    </Form.Root>
  );
}
