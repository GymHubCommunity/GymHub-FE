import PlusSvg from '@/assets/icons/PlusSvg';
import BackButton from '@/components/atoms/Button/BackButton';
import styles from '@/components/organisms/Header/BackButtonHeader/BackButtonHeader.module.scss';
import commonStyles from '@/components/organisms/Header/Header.module.scss';

interface HeaderProp {
  pageName?: string;
  onClick?: () => void;
}

function BackButtonHeader({ pageName, onClick }: HeaderProp) {
  return (
    <header className={commonStyles.wrapper}>
      <div className={commonStyles.button}>
        <BackButton />
      </div>
      {pageName && <span className={styles.title}>{pageName}</span>}
      {pageName === '운동 기록하기' && (
        <button onClick={onClick} className={styles.button}>
          <PlusSvg color="#70767E" />
        </button>
      )}
    </header>
  );
}

export default BackButtonHeader;
