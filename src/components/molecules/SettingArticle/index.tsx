import ToggleButton from '@/components/atoms/Button/ToggleButton';
import styles from '@/components/molecules/SettingArticle/SettingArticle.module.scss';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface SettingArticleProp {
  type: 'profileToggle' | 'logout' | 'withDraw';
  children?: ReactNode;
}

function SettingArticle({ type, children }: SettingArticleProp) {
  const router = useRouter();
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
          <button
            type="button"
            className={styles.settingName}
            onClick={() => router.push('/mypage')}
          >
            로그아웃
          </button>
        </div>
      );
    case 'withDraw':
      return (
        <div className={styles.wrapper}>
          <button
            type="button"
            className={styles.withDraw}
            onClick={() => router.push('/setting/resign')}
          >
            회원 탈퇴
          </button>
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
