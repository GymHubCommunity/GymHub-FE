import HeaderSettingSvg from '@/assets/icons/HeaderSettingSvg';
import styles from '@/components/atoms/Button/SettingButton/SettingButton.module.scss';
import Link from 'next/link';

function SettingButton() {
  return (
    <Link href={'/setting'} className={styles.wrapper}>
      <HeaderSettingSvg />
    </Link>
  );
}

export default SettingButton;
