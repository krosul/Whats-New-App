import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/react';
export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>What'sNewApp</title>
      </Head>
      <main>
        <Flex>{children}</Flex>
      </main>
    </>
  );
};
