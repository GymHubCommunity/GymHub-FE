import MypageButton from '@/components/atoms/Button/MypageButton';
import SearchButton from '@/components/atoms/Button/SearchButton';
import SettingButton from '@/components/atoms/Button/SettingButton';
import commonStyles from '@/components/organisms/Header/Header.module.scss';

function MainHeader() {
  return (
    <header className={commonStyles.wrapper}>
      <SettingButton />
      <h1>Gymhub</h1>
      <div>
        <SearchButton />
        <MypageButton />
      </div>
    </header>
  );
}

export default MainHeader;
