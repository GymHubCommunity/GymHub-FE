'use client';
import styles from '@/components/Layout/MobileLayout/MobileLayout.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { PropsWithChildren, useEffect } from 'react';

let vh = 0;

function MobileLayout({ children }: PropsWithChildren) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [windowSize.height]);

  return <div className={styles.container}>{children}</div>;
}

export default MobileLayout;
