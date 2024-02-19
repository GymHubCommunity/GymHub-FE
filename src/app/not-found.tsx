import ErrorInfo from '@/components/molecules/ErrorInfo';
import Footer from '@/components/organisms/Footer';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/molecules/ErrorInfo/ErrorInfo.module.scss';
import Image from 'next/image';
import NotFoundImg from '@/public/images/NotFoundImg.png';

function NotFound() {
  return (
    <>
      <div className={styles.headerWrapper}>
        <BackButtonHeader pageName="오류 발생" />
        <div className={styles.itemWrapper}>
          <ErrorInfo text="오류가 발생했습니다.">
            <Image src={NotFoundImg} alt="not found 이미지" priority />
          </ErrorInfo>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
