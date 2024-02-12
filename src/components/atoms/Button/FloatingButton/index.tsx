import PlusSvg from '@/assets/icons/PlusSvg';
import styles from '@/components/atoms/Button/FloatingButton/FloatingButton.module.scss';
import { useRouter } from 'next/navigation';

function FloatingButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/post/add')} className={styles.wrapper}>
      <PlusSvg />
    </button>
  );
}

export default FloatingButton;
