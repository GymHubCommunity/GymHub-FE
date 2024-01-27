import AuthProvider from '@/components/AuthProvider';
import QueryProvider from '@/components/QueryProvider';
import METADATA from '@/constants/metaData';
import '@/styles/globalStyle.scss';
import Tracking from '@/utils/Tracking';

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
};

function RootLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <html lang="ko">
      <body>
        <Tracking />
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
        <Toaster containerClassName="toast" />
      </body>
    </html>
  );
}

export default RootLayout;
