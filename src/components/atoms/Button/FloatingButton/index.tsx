import PlusSvg from '@/assets/icons/PlusSvg';
import styles from '@/components/atoms/Button/FloatingButton/FloatingButton.module.scss';
import Link from 'next/link';

function FloatingButton() {
  return (
    <Link href={'/post/add'} className={styles.wrapper}>
      <PlusSvg />
    </Link>
  );
}

export default FloatingButton;
