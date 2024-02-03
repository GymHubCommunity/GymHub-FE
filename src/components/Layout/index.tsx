import styles from '@/components/Layout/Layout.module.scss';
import Footer from '@/components/organisms/Footer';
import MainHeader from '@/components/organisms/Header/MainHeader';
import { ReactNode } from 'react';

function Layout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <>
      <MainHeader />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
