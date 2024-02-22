'use client';

import AuthProvider from '@/providers/AuthProvider';
import MobileLayout from '@/components/Layout/MobileLayout';
import QueryProvider from '@/providers/QueryProvider';
import { Provider } from 'jotai';
import Layout from '@/components/Layout';
import { ReactNode } from 'react';
import { LazyMotion, domAnimation} from 'framer-motion';

function Providers({ children }: { children: Readonly<ReactNode> }) {
  return (
    <AuthProvider>
      <Provider>
        <QueryProvider>
          <LazyMotion features={domAnimation}>
            <MobileLayout>
              <Layout>{children}</Layout>
            </MobileLayout>
          </LazyMotion>
        </QueryProvider>
      </Provider>
    </AuthProvider>
  );
}

export default Providers;
