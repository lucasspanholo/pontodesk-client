import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme'

import { QueryClientProvider } from 'react-query';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
// import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient';
import { AuthProvider } from '../contexts/AuthContext';
import Head from 'next/head';

if (process.env.NODE_ENV === 'development') {
  // makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pontodesk.</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <AuthProvider>
            <SidebarDrawerProvider>
              <Component {...pageProps} />
            </SidebarDrawerProvider>
          </AuthProvider>
        </ChakraProvider>

        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </>

  )
}

export default MyApp
