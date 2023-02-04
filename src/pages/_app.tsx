import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme, lightTheme } from 'themes';
import { DataProvider } from 'context/data';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <ChakraProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DataProvider>
  );
}
