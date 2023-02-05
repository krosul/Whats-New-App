import { MainLayout } from '@/Layouts';
import { Flex, Heading, Text } from '@chakra-ui/react';

const lading = () => {
  return (
    <MainLayout>
      <Flex
        bg="brand.background"
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Heading color="brand.headline">
          Una nueva forma de
          <Text color="brand.main">comunicarte</Text>
          con tus amigos
        </Heading>
      </Flex>
    </MainLayout>
  );
};

export default lading;
