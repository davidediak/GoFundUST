import React, {FC} from 'react';
import {
  Container,
  Flex,
  HStack,
  Image,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  VStack,
  Box,
  Link,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import TerraWallet from 'components/TerraWallet';
import NavbarLink from 'components/NavbarLink';
import BurgerIcon from 'components/icons/BurgerIcon';
import CloseIcon from 'components/icons/CloseIcon';

const Navbar: FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Container
      maxW="container.xl"
      px={['6', null, '12']}
      pt="8"
      position="relative"
      centerContent={true}>
      <Flex w="100%" justify="space-between" align="center">
        <Box flexShrink={0}>
          <NextLink href="/" passHref={true}>
            <a>
              <Image src="/Placeholder.svg" alt="GoFund US(T) Logo" />
            </a>
          </NextLink>
        </Box>
        <Box display={['none', null, null, 'block']} flex="1">
          <HStack flex="1" px="16" spacing="12">
            <NavbarLink text="Home" href="/" />
            <NavbarLink text="New Fund" href="/new" />

            <NavbarLink text="Fund List" href={'/funds'} />
            <NavbarLink text="Owned Funds" href={'/owned-funds'} />
          </HStack>
        </Box>
        <HStack spacing="5" justify="flex-end">
          <TerraWallet />
          <Box display={[null, null, null, 'none']}>
            <Button variant="icon" ref={btnRef} onClick={onOpen} pr="0" mr="-2">
              <BurgerIcon color="white" width="1.5rem" height="1.5rem" />
            </Button>
          </Box>
        </HStack>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" size="sm" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            height="100%"
            bg="brand.purple"
            zIndex="100"
            px={['6', null, '12']}
            py="8"
            direction="column">
            <Flex justify="space-between" width="100%" align="center">
              <Box flexShrink={0}>
                <Image src="/Placeholder.svg" alt="GoFund US(T). The future of crowdfunding." />
              </Box>
              <Button variant="icon" mr="-2" onClick={onClose}>
                <CloseIcon color="white" width="1.5rem" height="1.5rem" />
              </Button>
            </Flex>
            <Box mt="20">
              <VStack spacing="4" align="flex-start" textTransform="uppercase">
                <Link href="/" color="white">
                  Home
                </Link>

                <Link href="/new" color="white">
                  New Fund
                </Link>
                <Link color="white.500" href={'/funds'}>
                  Fund List
                </Link>
                <Link color="white.500" href={'/owned-funds'}>
                  Owned Funds
                </Link>
              </VStack>
            </Box>
            <VStack spacing="10" align="flex-start" mt="auto">
              <TerraWallet />
              <HStack spacing="12" align="flex-start" display="none">
                <Link
                  href="/tc"
                  textTransform="uppercase"
                  color="white"
                  opacity="0.7"
                  isExternal={true}>
                  Terms of use (TBD)
                </Link>
                {/* <Link
                  href="/"
                  textTransform="uppercase"
                  color="white"
                  opacity="0.7"
                >
                  Privacy Policy
                </Link> */}
              </HStack>
            </VStack>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Navbar;
