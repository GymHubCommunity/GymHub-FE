import MypageButton from '@/components/atoms/Button/MypageButton';
import SearchButton from '@/components/atoms/Button/SearchButton';
import SettingButton from '@/components/atoms/Button/SettingButton';
import styles from '@/components/organisms/Header/MainHeader/MainHeader.module.scss';

export interface MainHeaderProp {
  memberId: number;
}

function MainHeader({ memberId }: MainHeaderProp) {
  return (
    <header className={styles.wrapper}>
      <SettingButton />
      <h1 className={styles.title}>GYMHUB</h1>
      <div className={styles.inWrapper}>
        <SearchButton page="main" />
        <MypageButton memberId={memberId} />
      </div>
    </header>
  );
}

export default MainHeader;
