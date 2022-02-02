import { Box } from "@chakra-ui/react";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Box maxW={1120} px={[10, 15, 20]} mx="auto" my={[10, 15, 20]}>
        <CardList />
      </Box>
    </>
  );
}

export default App;
