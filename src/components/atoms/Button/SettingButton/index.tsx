import HeaderSettingSvg from '@/assets/icons/HeaderSettingSvg';
import styles from '@/components/atoms/Button/SettingButton/SettingButton.module.scss';
import { useRouter } from 'next/navigation';

function SettingButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/setting')} className={styles.wrapper}>
      <HeaderSettingSvg />
    </button>
  );
}

export default SettingButton;
