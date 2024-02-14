import SettingArticle from '@/components/molecules/SettingArticle';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/SettingSection/SettingSection.module.scss';

function SettingSection() {
  return (
    <div className={commonStyles.wrapper}>
      <BackButtonHeader pageName="설정" />
      <div className={styles.inWrapper}>
        <SettingArticle type="profileToggle" />
        <SettingArticle type="logout" />
        <SettingArticle type="withDraw" />
      </div>
    </div>
  );
}

export default SettingSection;
