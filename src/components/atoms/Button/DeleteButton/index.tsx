import { TrashCanSvg } from '@/assets/icons/TrashCanSvg';
import styles from '@/components/atoms/Button/DeleteButton/DeleteButton.module.scss';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { motion } from 'framer-motion';

interface DeleteButtonProps {
  deleteComment: UseMutateFunction<AxiosResponse<any, any>>;
  deleteAnimateState: string;
}

function DeleteButton({
  deleteComment,
  deleteAnimateState,
}: DeleteButtonProps) {
  return (
    <motion.button
      className={styles.wrapper}
      onClick={() => deleteComment()}
      initial="disappear"
      animate={deleteAnimateState}
      variants={{
        appear: { opacity: 1 },
        disappear: { opacity: 0 },
      }}
    >
      <motion.p
        variants={{
          appear: { scale: 1 },
          disappear: { scale: 0 },
        }}
      >
        <TrashCanSvg />
      </motion.p>
    </motion.button>
  );
}

export default DeleteButton;
