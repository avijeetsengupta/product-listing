import React from "react";
import { Flex, CircularProgress } from "@chakra-ui/react";

interface ISpinnerProps {
  isInner?: boolean;
}

const Spinner: React.FC<ISpinnerProps> = ({ isInner = false }: ISpinnerProps) => {
  if (isInner) {
    return (
      <Flex>
        <CircularProgress isIndeterminate={true} color="vidaPrimary.500" size="5rem" />
      </Flex>
    );
  }

  return (
    <Flex
      h="full"
      w="full"
      justify="center"
      align="center"
      bg="white"
      opacity={0.8}
      zIndex={999}
      top={0}
      left={0}
      right={0}
      bottom={0}
      pos="absolute"
    >
      <CircularProgress isIndeterminate={true} color="vidaPrimary.500" size="5rem" />
    </Flex>
  );
};

export default Spinner;
