import { postLogout } from '@/apis/oAuth';
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
          <Link
            href="/signin"
            className={styles.settingName}
            onClick={() => postLogout()}
          >
            로그아웃
          </Link>
        </div>
      );
    case 'withDraw':
      return (
        <div className={styles.wrapper}>
          <Link href={'/setting/resign'} className={styles.withDraw}>
            회원 탈퇴
          </Link>
        </div>
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
