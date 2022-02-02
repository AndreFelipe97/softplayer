import { Box, Heading, Skeleton, Image } from "@chakra-ui/react";
import { CardProps } from "./interface";

export function Card({ id, imgPath, name }: CardProps) {
  return (
    <Box key={id} borderRadius="md" bgColor="pGray.800">
      <Skeleton>
        <Image
          src={imgPath}
          alt={name}
          objectFit="cover"
          w="max"
          h={48}
          borderTopRadius="md"
        />
      </Skeleton>
      <Box pt={5} pb={4} px={6}>
        <Heading fontSize="2xl">{name}</Heading>
      </Box>
    </Box>
  );
}
