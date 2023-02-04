import { Flex, Card, CardBody, Button } from '@chakra-ui/react';
import { Messages } from 'interfaces';
import { FC, useState } from 'react';

interface Props {
  index: number;
  messageProp: Messages;
}

export const Message: FC<Props> = ({ index, messageProp }) => {
  const { from, message, reaction } = messageProp;
  const [HoverMessage, setHoverMessage] = useState(false);
  return (
    <Flex
      key={index}
      w="full"
      justify="flex-start"
      direction={from === 'me' ? 'row-reverse' : 'row'}
      paddingX="10"
      paddingY="2"
      onMouseEnter={() => setHoverMessage(true)}
      onMouseLeave={() => setHoverMessage(false)}
      gap="2"
    >
      <Card w="fit-content" bg={from === 'me' ? 'brand.main' : 'gray.500'}>
        <CardBody>{message}</CardBody>
      </Card>
      {HoverMessage && (
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </Button>
      )}
    </Flex>
  );
};
