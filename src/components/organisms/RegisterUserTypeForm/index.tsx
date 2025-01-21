import { FormEvent, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Button, Flex, RadioCards, Text } from "@radix-ui/themes";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

const defaultValue = "business";

type Props = {
  submitHandler: (str: string) => void;
  defaultUserType: string | null;
};

export default function RegisterUserTypeForm({
  submitHandler,
  defaultUserType,
}: Props) {
  const [value, setValue] = useState(() => defaultUserType || defaultValue);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value) {
      submitHandler(value);
    }
  };

  return (
    <Form.Root onSubmit={onSubmit} style={{ width: "100%", display: "block" }}>
      <Flex direction="column">
        <RadioCards.Root
          defaultValue={defaultUserType || defaultValue}
          columns={{ initial: "1" }}
          mb="6"
          name="userType"
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        >
          <RadioCards.Item value="business">
            <Flex direction="column" width="100%">
              <Text weight="bold">Business</Text>
              <Text>Lorem ipsum</Text>
            </Flex>
          </RadioCards.Item>
          <RadioCards.Item value="hobbyist">
            <Flex direction="column" width="100%">
              <Text weight="bold">Hobbyist</Text>
              <Text>Lorem ipsum</Text>
            </Flex>
          </RadioCards.Item>
          <RadioCards.Item value="enterprise">
            <Flex direction="column" width="100%">
              <Text weight="bold">Enterprise</Text>
              <Text>Lorem ipsum</Text>
            </Flex>
          </RadioCards.Item>
        </RadioCards.Root>
        <Form.Submit asChild>
          <Button type="submit" size="3">
            <span>Continue</span>
            <Flex as="span" align="end" justify="center">
              <DoubleArrowRightIcon />
            </Flex>
          </Button>
        </Form.Submit>
      </Flex>
    </Form.Root>
  );
}
