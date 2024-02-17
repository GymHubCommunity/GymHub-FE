import styles from '@/components/Layout/Layout.module.scss';
import { ReactNode } from 'react';

function Layout({ children }: { children: Readonly<ReactNode> }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Layout;
