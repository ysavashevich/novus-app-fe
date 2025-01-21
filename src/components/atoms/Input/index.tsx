import * as Form from "@radix-ui/react-form";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import { forwardRef, HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
};

const Input = forwardRef<HTMLInputElement, Props & UseFormRegisterReturn>(
  ({ error, label, type, ...props }, ref) => (
    <Box mb="4">
      <Form.Field {...props} ref={ref}>
        <Flex mb="2">
          <Form.Label>{label}</Form.Label>
        </Flex>
        <Form.Control asChild type={type || "text"}>
          <TextField.Root />
        </Form.Control>
        <Flex mt="1" align="center">
          {error && (
            <>
              <Flex mr="1">
                <CrossCircledIcon color="tomato" />
              </Flex>
              <Form.Message role="alert" data-testid={`${props.name}-msg`}>
                <Text color="tomato">{error}</Text>
              </Form.Message>
            </>
          )}
        </Flex>
      </Form.Field>
    </Box>
  )
);

export default Input;
