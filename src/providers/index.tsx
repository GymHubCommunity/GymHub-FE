import AuthProvider from '@/providers/AuthProvider';
import MobileLayout from '@/components/Layout/MobileLayout';
import QueryProvider from '@/providers/QueryProvider';
import { Provider } from 'jotai';
import Layout from '@/components/Layout';
import { ReactNode } from 'react';

function Providers({ children }: { children: Readonly<ReactNode> }) {
  return (
    <AuthProvider>
      <Provider>
        <QueryProvider>
          <MobileLayout>
            <Layout>{children}</Layout>
          </MobileLayout>
        </QueryProvider>
      </Provider>
    </AuthProvider>
  );
}

export default Providers;
