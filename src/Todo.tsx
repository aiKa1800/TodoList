import { Button, Flex, Group, Text, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useState } from "react";
import { InferType, object, string } from "yup";

export default function Todo() {
  const [listValue, setListValue] = useState<string[]>([]);

  const schema = object({
    input: string().required(),
  });

  type IInput = InferType<typeof schema>;

  const form = useForm<IInput>({
    validate: yupResolver(schema),
    initialValues: {
      input: "",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    setListValue([...listValue, values.input]);
    form.reset();
  });

  console.log(listValue);

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      h={"100vh"}
      w={"100%"}
      bg={"blue"}
    >
      <Flex direction={"row"} justify={"center"} w={"100%"} h={"50%"}>
        <Flex
          justify={"center"}
          w={"30%"}
          h={"100%"}
          bg={"white"}
          p={30}
          style={{ borderRadius: "20px" }}
        >
          <form onSubmit={handleSubmit}>
            <Flex direction={"column"} gap={20}>
              <Group>
                <TextInput
                  placeholder="add task"
                  {...form.getInputProps("input")}
                />
                <Button type="submit">Add</Button>
              </Group>

              <Flex direction={"column"} w={"100%"} gap={10}>
                {listValue.map((v, index) => (
                  <>
                    <Group justify="space-between" bg={"blue"}>
                      <Text>{v}</Text>
                      <Button
                        onClick={() =>
                          setListValue((prev) =>
                            prev.filter((_, i) => index != i)
                          )
                        }
                      >
                        Delete
                      </Button>
                    </Group>
                  </>
                ))}
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}
