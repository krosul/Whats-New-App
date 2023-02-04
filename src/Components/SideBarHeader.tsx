import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  Stack,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { AddIcon, SettingsIcon } from '@chakra-ui/icons';

export default function SideBarHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex bg="brand.main" padding="2" align="center" justify="space-between">
      <Image
        src="https://cdn.pixabay.com/photo/2015/09/03/06/59/man-920083_960_720.jpg"
        alt="userImage"
        boxSize="16"
        borderRadius="full"
      />
      <Stack spacing={2} direction={'row'}>
        <Button onClick={onOpen} rightIcon={<AddIcon />}>
          Agregar contactos
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="brand.main">
            <ModalHeader color="brand.headline">
              Busca a tu nuevo amigo😊😊!
            </ModalHeader>
          </ModalContent>
        </Modal>
        <Menu>
          <MenuButton as={Button} rightIcon={<SettingsIcon />} />
          <MenuList>
            <MenuItem>darkMoke</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
}
