import ErrorInfo from '@/components/molecules/ErrorInfo';
import Footer from '@/components/organisms/Footer';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/molecules/ErrorInfo/ErrorInfo.module.scss';
import Image from 'next/image';
import PrepareImg from '@/public/images/Prepare.png';

interface PrepareProp {
  type: 'default' | 'map&Mate';
}

function Prepare({ type }: PrepareProp) {
  const defaultPrepareMessage = '서비스 준비 중입니다.';

  return (
    <>
      <div className={styles.headerWrapper}>
        <BackButtonHeader pageName="동네 화력 지도" />
        <div className={styles.itemWrapper}>
          {type == 'default' ? (
            <ErrorInfo text={defaultPrepareMessage}>
              <Image src={PrepareImg} alt="서비스 준비 중 이미지" priority />
            </ErrorInfo>
          ) : (
            <ErrorInfo
              text="동네 별 운동 화력 지도와"
              line=" 운동 메이트와 함께 운동할 수 있는"
              nextLine=" 서비스를 준비 중이에요!"
            >
              <Image src={PrepareImg} alt="서비스 준비 중 이미지" priority />
            </ErrorInfo>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Prepare;
