import FloatingDumbbellSvg from '@/assets/icons/FloatingDumbbellSvg';
import PlusSvg from '@/assets/icons/PlusSvg';
import styles from '@/components/atoms/Button/FloatingButton/FloatingButton.module.scss';
import Link from 'next/link';

interface FloatingButtonProp {
  type: 'post' | 'addExercise';
}

function FloatingButton({ type }: FloatingButtonProp) {
  return (
    <>
      {type === 'post' ? (
        <Link href={'/post/add'} className={styles.wrapper}>
          <PlusSvg />
        </Link>
      ) : (
        // TODO: 운동 추가하기 버튼
        <Link href={'/records/add'} className={styles.wrapper}>
          <FloatingDumbbellSvg />
        </Link>
      )}
    </>
  );
}

export default FloatingButton;
