import { Stack, Image, Text, Center } from "@chakra-ui/react";

export default ({ cat }) => {
  return (
    <Stack marginBottom={10}>
      <Center>
        <Image src={cat.img} maxH="1080px" maxW="80%" fit="contain" />
      </Center>
      <Center>
        <Text>
          {cat.name} by {cat.credit}
        </Text>
      </Center>
    </Stack>
  );
};
