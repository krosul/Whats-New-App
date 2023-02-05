import { useState } from 'react';
import { MainLayout } from '@/Layouts';
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  InputGroup,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import icono from '@public/favicon.ico';
import GoogleIcon from '@public/google.png';
import FacebookIcon from '@public/facebook.png';
import GmailIcon from '@public/gmail.png';
type OptionsState = 'button-login-menu' | 'inputs-login-menu';

const landing = () => {
  const [SelectedOptionLogin, setSelectedOptionLogin] =
    useState<OptionsState>('button-login-menu');
  return (
    <MainLayout>
      <Flex
        bg="brand.background"
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        color="brand.headline"
      >
        <Box w="60%" bg="brand.main" h="full">
          <Image />
          <Heading color="brand.headline">
            Una nueva forma de
            <Text>comunicarte</Text>
            con tus amigos
          </Heading>
        </Box>
        <Flex
          w="40%"
          h="full"
          direction="column"
          align="center"
          justify="center"
          gap="3"
        >
          <Flex align="center" justify="center" gap="3">
            <Image src={icono.src} w="76px" h="76px" />
            <Heading color="brand.headline">What'sNewApp</Heading>
          </Flex>
          <Text marginY="16" fontSize="2xl">
            Inicia sesion o Registrate
          </Text>
          <Flex direction="column" gap="5">
            {SelectedOptionLogin === 'button-login-menu' ? (
              <>
                <Button
                  gap="5px"
                  bg="brand.main"
                  h="16"
                  _hover={{ bg: 'brand.paragraph' }}
                >
                  <Image src={GoogleIcon.src} w="10" h="10" />
                  Continuar con Google
                </Button>
                <Button
                  gap="5px"
                  bg="brand.main"
                  h="16"
                  _hover={{ bg: 'brand.paragraph' }}
                >
                  <Image src={FacebookIcon.src} w="10" h="10" />
                  Continuar con Facebook
                </Button>
                <Button
                  gap="5px"
                  bg="brand.main"
                  h="16"
                  _hover={{ bg: 'brand.paragraph' }}
                >
                  <Image src={GmailIcon.src} w="10" h="10" />
                  Continuar con Gmail
                </Button>
              </>
            ) : (
              <form onSubmit={() => console.log('EEntro')}>
                <FormControl>
                  <FormLabel>Direccion de correo:</FormLabel>
                  <Input placeholder="tucorreo@gmail.com" />
                </FormControl>
                <Input />
                <Button type="submit">Ingresar</Button>
              </form>
            )}
          </Flex>
          <Text mt="16" color="brand.paragraph">
            By what'sNewApp
          </Text>
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default landing;
