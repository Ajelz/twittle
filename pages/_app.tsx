import type { AppProps } from 'next/app';
import type { FunctionComponent } from 'react'; // New Import
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import Layout from '@/components/Layout';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import '@/styles/globals.css';
import EditModal from '@/components/modals/EditModal';

export default function App({ Component, pageProps }: AppProps) {
  const TypedComponent = Component as FunctionComponent<any>; // Explicit Typing

  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <TypedComponent {...pageProps} /> {/* Use TypedComponent */}
      </Layout>
    </SessionProvider>
  );
}
