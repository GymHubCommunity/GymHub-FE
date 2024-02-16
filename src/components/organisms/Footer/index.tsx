import AllTabsSvg from '@/assets/icons/AllTabsSvg';
import DumbbellSvg from '@/assets/icons/DumbbellSvg';
import HomeSvg from '@/assets/icons/HomeSvg';
import MapSvg from '@/assets/icons/MapSvg';
import styles from '@/components/organisms/Footer/Footer.module.scss';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Link href="/">
        <HomeSvg />
      </Link>
      <Link href="/alltabs">
        <AllTabsSvg />
      </Link>
      <Link href="/map">
        <MapSvg />
      </Link>
      <Link href="/records">
        <DumbbellSvg type="menu" />
      </Link>
    </footer>
  );
}

export default Footer;
