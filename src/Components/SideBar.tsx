import { useContext, useEffect } from 'react';
import SideBarHeader from './SideBarHeader';

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Kbd,
  InputRightElement,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { DataContext } from '../../context/data';
import { SearchIcon } from '@chakra-ui/icons';
export const SideBar = () => {
  const arrayForSkeletons = [...Array(10)];

  const { contacts, loadContactsUser, setSelectedUser } =
    useContext(DataContext);
  useEffect(() => {
    loadContactsUser();
  }, []);
  return (
    <Box
      sx={{
        width: '35%',
        height: '98vh',
      }}
      bg="brand.background"
    >
      <SideBarHeader />
      <Box
        w="full"
        p="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <InputGroup w="full">
          <InputLeftElement children={<SearchIcon color="gray.300" />} />
          <Input placeholder="Busca a tu amig@" w="90%" color="white" />
          {/* <InputLeftElement children={<Kbd>Ctrl K</Kbd>} /> */}
        </InputGroup>
      </Box>
      <Box overflowY="scroll" h="83%" cursor="pointer">
        {!contacts[0] &&
          arrayForSkeletons.map((a, index) => (
            <Flex
              key={index}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="start"
              marginBottom="35px"
              marginX="3.5"
            >
              <SkeletonCircle
                size="14"
                startColor="purple.400"
                endColor="brand.main"
              />
              <Flex
                justify="center"
                align="center"
                h="100%"
                w="55%"
                direction="column"
              >
                <SkeletonText
                  ml="4"
                  noOfLines={2}
                  spacing="4"
                  width="full"
                  startColor="purple.400"
                  endColor="brand.main"
                  skeletonHeight="2"
                />
              </Flex>
            </Flex>
          ))}
        {contacts[0] &&
          contacts.map(
            ({ name, lastMessage, email, image, messages }, index) => (
              <Card
                key={index}
                w="100%"
                border={2}
                borderColor="green.300"
                rounded="none"
                bg="brand.background"
                _hover={{ bg: 'gray.800' }}
                onClick={() =>
                  setSelectedUser({ name, lastMessage, email, image, messages })
                }
              >
                <CardHeader>
                  <Flex justify="start" align="center" gap={2}>
                    <Avatar src="https://bit.ly/broken-link" />
                    <Flex
                      justify="center"
                      align="start"
                      h="100%"
                      direction="column"
                    >
                      <Text color="brand.headline">{name}</Text>
                      <Text color="brand.paragraph">{lastMessage}</Text>
                    </Flex>
                  </Flex>
                </CardHeader>
              </Card>
            )
          )}
      </Box>
    </Box>
  );
};
