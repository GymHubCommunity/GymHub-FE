import HomeSvg from '@/assets/icons/HomeSvg';
import styles from '@/components/organisms/Footer/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <HomeSvg />
    </footer>
  );
}

export default Footer;
