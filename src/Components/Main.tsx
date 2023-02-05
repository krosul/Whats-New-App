import { ChangeEvent, MouseEventHandler, useContext, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  ScaleFade,
  SlideFade,
  Text,
} from '@chakra-ui/react';
import supervision from '@public/supervision.png';
import { DataContext } from '../../context/data';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import emojiIcon from '@public/happy.png';
import handler from '../pages/api/hello';
import { MessagesLayout } from './MessagesLayout';

interface InputProps extends ChangeEvent<HTMLInputElement> {
  unified: string;
  native: string;
}

export const Main = () => {
  const { selectedContact } = useContext(DataContext);
  const [message, setMessage] = useState('');
  const [OpenEmojiInput, setOpenEmojiInput] = useState(false);
  const flagForRender = Object.keys(selectedContact).length;
  const handleMessage = (e: InputProps) => {
    if (e.native) {
      console.log('entro');
      setMessage(message + e.native);
      return;
    }
    setMessage(e.target.value);
  };

  const handleInputEmoji = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenEmojiInput(!OpenEmojiInput);
  };

  return (
    <Box
      w="65%"
      bg="brand.background"
      h="100vh"
      color="white"
      borderLeft="2px"
      borderColor="brand.paragraph"
    >
      {!flagForRender && (
        <Flex
          justifyContent="center"
          align="center"
          h="full"
          w="full"
          direction="column"
        >
          <Image src={supervision.src} w="72" h="72" mb="8" />
          <Flex
            direction="column"
            justify="space-around"
            align="center"
            gap="1"
          >
            <Text fontSize="4xl">What'sNewApp</Text>
            <Text fontSize="xl" color="brand.paragraph">
              Charla con tus mejores amigos desde cualquier lugar del
              mundo😊🗽💫
            </Text>
          </Flex>
        </Flex>
      )}

      {flagForRender && (
        <Flex direction="column" justify="space-between" w="full" h="full">
          <Flex align="center" bg="brand.main" w="full" h="80px" gap="5" pl="5">
            <Avatar />
            <Text fontSize="xl">{selectedContact.name}</Text>
          </Flex>

          {selectedContact.messages && (
            <MessagesLayout messages={selectedContact.messages} />
          )}

          <form onSubmit={() => console.log('EEntro')}>
            <Flex
              w="full"
              justify="space-around"
              align="center"
              bg="gray.700"
              h="60px"
            >
              <InputGroup w="75%">
                <Input
                  placeholder="Escribe tu mensaje aqui"
                  value={message}
                  onChange={handleMessage}
                />
              </InputGroup>
              <Box position="absolute" bottom="20" right="7">
                <SlideFade in={OpenEmojiInput} offsetY="20px">
                  {OpenEmojiInput && (
                    <Picker
                      data={data}
                      autoFocus={true}
                      onEmojiSelect={(e: any) => handleMessage(e)}
                      onClickOutside={handleInputEmoji}
                    />
                  )}
                </SlideFade>
              </Box>
              <Image
                src={emojiIcon.src}
                w="8"
                color="gray.400"
                onClick={handleInputEmoji}
              />
              <Button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </Button>
            </Flex>
          </form>
        </Flex>
      )}
    </Box>
  );
};
