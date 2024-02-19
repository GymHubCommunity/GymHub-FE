import ErrorInfo from '@/components/molecules/ErrorInfo';
import Footer from '@/components/organisms/Footer';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/molecules/ErrorInfo/ErrorInfo.module.scss';

function NotFound() {
  return (
    <>
      <div className={styles.headerWrapper}>
        <BackButtonHeader pageName="오류 발생" />
        <ErrorInfo text="오류가 발생했습니다."></ErrorInfo>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
