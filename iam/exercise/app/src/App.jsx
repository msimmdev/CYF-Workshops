import { useState } from "react";
import "./App.css";
import { Flex, Center, Link, Stack, Box } from "@chakra-ui/react";
import CatList from "./CatList";
import LoginButton from "./LoginButton";

function App() {
  const [selectedCats, setSelectedCats] = useState("free");

  return (
    <Flex>
      <Box minW="200px" w="20%" bgColor="#eeeeee">
        <Stack>
          <Link
            onClick={() => setSelectedCats("free")}
            _hover={{ background: "#cccccc" }}
            marginTop={5}
          >
            <Center>Free Cats</Center>
          </Link>
          <Link
            onClick={() => setSelectedCats("premium")}
            _hover={{ background: "#cccccc" }}
          >
            <Center>Premium Cats</Center>
          </Link>
          <Link
            onClick={() => setSelectedCats("super-premium")}
            _hover={{ background: "#cccccc" }}
          >
            <Center>Super-Premium Cats</Center>
          </Link>
          <LoginButton />
        </Stack>
      </Box>
      <Center w="80%">
        <CatList subscription={selectedCats} key={selectedCats} />
      </Center>
    </Flex>
  );
}

export default App;
