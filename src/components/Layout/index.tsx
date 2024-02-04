import styles from '@/components/Layout/Layout.module.scss';
import Footer from '@/components/organisms/Footer';
import { ReactNode } from 'react';

function Layout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
