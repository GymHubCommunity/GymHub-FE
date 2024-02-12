import SettingArticle from '@/components/molecules/SettingArticle';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/SettingSection/SettingSection.module.scss';

function SettingSection() {
  return (
    <>
      <BackButtonHeader pageName="설정" />
      <div className={styles.wrapper}>
        <SettingArticle type="profileToggle" />
        <SettingArticle type="logout" />
        <SettingArticle type="withDraw" />
      </div>
    </>
  );
}

export default SettingSection;
