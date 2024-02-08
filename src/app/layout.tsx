import AuthProvider from '@/providers/AuthProvider';
import MobileLayout from '@/components/Layout/MobileLayout';
import QueryProvider from '@/providers/QueryProvider';

import METADATA from '@/constants/metaData';
import '@/styles/globalStyle.scss';
import { Provider } from 'jotai';
import Layout from '@/components/Layout';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.URL),
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  openGraph: {
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    url: METADATA.URL,
    siteName: METADATA.TITLE,
    images: [
      {
        url: METADATA.IMAGE,
        width: 388,
        height: 388,
      },
    ],
    locale: METADATA.LOCALE,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    site: METADATA.URL,
    images: [METADATA.IMAGE],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
};

function RootLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="a891c3b0994e59e64ba7393a7644c2979b797bb5"
        />
      </head>
      <body>
        <AuthProvider>
          <Provider>
            <QueryProvider>
              <MobileLayout>
                <Layout>{children}</Layout>
              </MobileLayout>
            </QueryProvider>
          </Provider>
        </AuthProvider>
        <Toaster containerClassName="toast" />
      </body>
    </html>
  );
}

export default RootLayout;
