import BackButton from '@/components/atoms/Button/BackButton';
import commonStyles from '@/components/organisms/Header/Header.module.scss';
import styles from '@/components/organisms/Header/BackButtonHeader/BackButtonHeader.module.scss';

interface HeaderProp {
  pageName: string;
}

function BackButtonHeader({ pageName }: HeaderProp) {
  return (
    <header className={commonStyles.wrapper}>
      <div className={commonStyles.button}>
        <BackButton />
      </div>
      <span className={styles.title}>{pageName}</span>
    </header>
  );
}

export default BackButtonHeader;
