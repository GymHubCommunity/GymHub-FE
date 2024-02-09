import ResignNickName from '@/components/molecules/ResignNickName';
import ResignText from '@/components/molecules/ResignText';
import ResignTwinButton from '@/components/molecules/ResignTwinButton';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';

import styles from '@/components/organisms/ResignSection/ResignSection.module.scss';

function ResignSection() {
  return (
    <>
      <BackButtonHeader pageName="회원 탈퇴" />
      <div className={styles.inWrapper}>
        <ResignText />
        <ResignNickName />
        <ResignTwinButton />
      </div>
    </>
  );
}

export default ResignSection;
