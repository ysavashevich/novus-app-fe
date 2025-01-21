import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import Input from "../../atoms/Input";
import { Button, Flex, Text } from "@radix-ui/themes";
import { CrossCircledIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { EMAIL_REGEX } from "../../../constants/regex";

type FormData = {
  email: string;
  password: string;
};

type Props = {
  submitHandler: (user: { email: string; password: string }) => Promise<any>;
  errorMessage: string | null;
  isLoading: boolean;
};

export default function LoginForm({
  submitHandler,
  errorMessage,
  isLoading,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    await submitHandler({ ...data });
  };

  return (
    <Form.Root
      data-testid="login-form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "100%", display: "block" }}
    >
      <Input
        label="Email"
        error={errors.email?.message}
        {...register("email", {
          required: "This field is required.",
          pattern: { value: EMAIL_REGEX, message: "Enter a correct email." },
        })}
      />
      <Input
        label="Password"
        type="password"
        error={errors.password?.message}
        {...register("password", { required: "This field is required." })}
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
