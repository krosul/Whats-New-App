import { Flex, Card, CardBody, Box } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Messages } from '../../interfaces';
import { Message } from './Message';

interface Props {
  messages: Messages[];
}

export const MessagesLayout: FC<Props> = ({ messages }) => {
  const [HoveredMessages, setHoveredMessages] = useState(false);
  return (
    <Flex direction="column" h="full" w="100%" justify="flex-end" gap="1">
      {messages[0] &&
        messages.map((m, index) => (
          <Message messageProp={m} index={index} key={index} />
        ))}
    </Flex>
  );
};
