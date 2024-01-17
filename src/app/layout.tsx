import QueryProvider from '@/components/QueryProvider';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'GymHub',
  description: 'GymHub',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Toaster containerStyle={{ fontSize: '16px' }} />
      </body>
    </html>
  );
}

export default RootLayout;
