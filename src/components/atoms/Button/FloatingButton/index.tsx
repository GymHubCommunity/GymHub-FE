import FloatingDumbbellSvg from '@/assets/icons/FloatingDumbbellSvg';
import PlusSvg from '@/assets/icons/PlusSvg';
import styles from '@/components/atoms/Button/FloatingButton/FloatingButton.module.scss';
import Modal from '@/components/organisms/Modal';
import Link from 'next/link';
import { useState } from 'react';

interface FloatingButtonProp {
  type: 'post' | 'addExercise';
}

function FloatingButton({ type }: FloatingButtonProp) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {type === 'post' ? (
        <Link href={'/post/add'} className={styles.wrapper}>
          <PlusSvg />
        </Link>
      ) : (
        <button onClick={openModal} className={styles.wrapper}>
          <FloatingDumbbellSvg />
        </button>
      )}
      {isOpen && (
        <Modal type="records" isShow={isOpen} closeModal={closeModal} />
      )}
    </>
  );
}

export default FloatingButton;
