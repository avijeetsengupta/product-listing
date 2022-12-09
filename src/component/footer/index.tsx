import { Box, Flex } from "@chakra-ui/react";
import "./index.scss";

const FooterComponent = () => {
  return (
    <>
      <Flex
        bottom={0}
        pos="fixed"
        py={1}
        px={2}
        minW="full"
        justify="center"
        h="inherit"
        align="center"
        backgroundColor={"transparent"}
        id="app-footer"
        fontSize="xs"
        lineHeight="1.25rem"
        textAlign="center"
      >
        <Box id="footer-links-wrapper">
          ABOUT PRODUCT TERMS AND CONDITIONS PRIVACY POLICY
          <Box as="span" whiteSpace="nowrap">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default FooterComponent;
