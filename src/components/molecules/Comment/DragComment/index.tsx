import styles from '@/components/molecules/Comment/DragComment/DragComment.module.scss';
import { MotionValue, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DragCommentProps {
  id: number;
  itemX: MotionValue<number>;
  children: ReactNode;
}

function DragComment({ id, itemX, children }: DragCommentProps) {
  return (
    <motion.div
      key={id}
      className={styles.wrapper}
      style={{
        x: itemX,
      }}
      drag="x"
      dragConstraints={{
        left: -100,
        right: 0,
      }}
      dragElastic={0.5}
      whileTap={{ cursor: 'grabbing' }}
    >
      {children}
    </motion.div>
  );
}

export default DragComment;
