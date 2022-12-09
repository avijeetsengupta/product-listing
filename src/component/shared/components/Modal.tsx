import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  BoxProps,
  ModalFooter,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerText?: string;
  headerSubText?: string;
  bodyText?: string;
  scrollBehaviour?: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  onAction?: () => void;
}

export const ContentModal: React.FC<IModalProps & BoxProps> = ({
  isOpen,
  onClose,
  headerText,
  children,
  size,
  headerSubText,
}: IModalProps & BoxProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered={true}
      size={size ? size : "lg"}
      blockScrollOnMount={true}
    >
      <ModalOverlay />
      <ModalContent
        maxH="95vh"
        borderRadius="0.5rem"
        _focus={{ boxShadow: "none !important" }}
        p={[0, 0, 4, 4]}
        boxShadow="xl"
      >
        <ModalHeader color="primaryDark" borderColor="grey.700">
          <Heading as="h1" fontSize="xl">
            {headerText}
          </Heading>
          {headerSubText && (
            <Text fontSize="sm" fontWeight="normal" color="grayText" mt={2}>
              {headerSubText}
            </Text>
          )}
        </ModalHeader>
        <ModalCloseButton _focus={{ outline: "none" }} right="0.5rem" />
        <ModalBody overflow="auto" h="full">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const AlertModal: React.FC<IModalProps> = ({ isOpen, onClose, onAction, headerText, bodyText }: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent borderRadius="0.5rem" p={[0, 0, 4, 4]} boxShadow="xl" _focus={{ boxShadow: "none !important" }}>
          <ModalHeader>{headerText}</ModalHeader>
          <ModalCloseButton _focus={{ outline: "none" }} />
          <ModalBody>{bodyText}</ModalBody>

          <ModalFooter>
            <Box minW="5rem" mr={4}>
              <button>aciton</button>
            </Box>
            <Box minW="5rem">
              <button>No</button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
