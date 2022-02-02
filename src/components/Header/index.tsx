import { Box, Flex, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Box gColor="pGray.800">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                maxW={1120}
                mx="auto"
                px={20}
                py={6}
            >
                <Text fontSize='xl' color="#8B0000">Softplayer</Text>
            </Flex>
        </Box>
    );
}