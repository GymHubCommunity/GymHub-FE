import ToggleButton from '@/components/atoms/Button/ToggleButton';
import styles from '@/components/molecules/SettingArticle/SettingArticle.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';

interface SettingArticleProps {
  type: 'profileToggle' | 'logout' | 'withDraw';
  children?: ReactNode;
}

function SettingArticle({ type, children }: SettingArticleProps) {
  switch (type) {
    case 'profileToggle':
      return (
        <div className={styles.wrapper}>
          <p className={styles.settingName}>계정 공개 설정</p>
          <ToggleButton />
        </div>
      );
    case 'logout':
      return (
        <div className={styles.wrapper}>
          <Link href="/signin" className={styles.settingName}>
            로그아웃
          </Link>
        </div>
      );
    case 'withDraw':
      return (
        <Link href={'/setting/resign'} className={styles.withDraw}>
          <div className={styles.wrapper}>회원 탈퇴</div>
        </Link>
      );
    default:
      return (
        <div className={styles.wrapper}>
          <button type="button" className={styles.settingName}>
            {children}
          </button>
        </div>
      );
  }
}

export default SettingArticle;
