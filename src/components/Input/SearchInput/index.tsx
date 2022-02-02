import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export function TextInput() {
  return (
    <FormControl display="flex" flexDirection="row">
      <InputGroup size="md">
        <Input
          aria-label="search"
          name="search"
          borderColor="transparent"
          bgColor="pGray.800"
          color="pGray.50"
          size="xs"
          _placeholder={{
            color: "pGray.200",
          }}
          _hover={{
            borderColor: "#8B0000",
          }}
        />
        <InputRightElement>
          <Button size="xs" mt="-16px" onClick={() => console.log("Buscar")}>
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
