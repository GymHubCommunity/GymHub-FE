'use client';

import NotificationSvg from '@/assets/icons/NotificationSvg';
import OnNotificationSvg from '@/assets/icons/OnNotificationSvg';
import PlusSvg from '@/assets/icons/PlusSvg';
import BackButton from '@/components/atoms/Button/BackButton';
import styles from '@/components/organisms/Header/BackButtonHeader/BackButtonHeader.module.scss';
import commonStyles from '@/components/organisms/Header/Header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProp {
  pageName?: string;
  isPending?: boolean;
  isUser?: boolean;
  onClick?: () => void;
}

function BackButtonHeader({
  pageName,
  isPending,
  isUser,
  onClick,
}: HeaderProp) {
  const pathName = usePathname();

  return (
    <header className={commonStyles.wrapper}>
      <div className={commonStyles.button}>
        <BackButton />
      </div>
      {pageName && <span className={styles.title}>{pageName}</span>}
      {pathName.startsWith('/records') && (
        <button type="button" onClick={onClick}>
          <PlusSvg color="#70767E" />
        </button>
      )}
      {isUser ? (
        pathName.startsWith('/members') && (
          <Link href={`/notification`}>
            {isPending ? <OnNotificationSvg /> : <NotificationSvg />}
          </Link>
        )
      ) : (
        <div />
      )}
    </header>
  );
}

export default BackButtonHeader;
