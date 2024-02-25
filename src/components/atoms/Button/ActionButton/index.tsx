import { TrashCanSvg } from '@/assets/icons/TrashCanSvg';
import UpdateSvg from '@/assets/icons/UpdateSvg';
import styles from '@/components/atoms/Button/ActionButton/ActionButton.module.scss';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

const cn = classNames.bind(styles);

interface ActionButtonProps {
  type: 'update' | 'delete';
  action: () => void;
  animateState: string;
}

function ActionButton({ type, action, animateState }: ActionButtonProps) {
  return (
    <motion.button
      className={cn('wrapper', type)}
      onClick={() => action()}
      initial="disappear"
      animate={animateState}
      variants={{
        appear: { opacity: 1 },
        disappear: { opacity: 0 },
      }}
    >
      <motion.div
        variants={{
          appear: { scale: 1 },
          disappear: { scale: 0 },
        }}
      >
        {type === 'update' ? (
          <div className={styles.inWrapper}>
            <UpdateSvg />
            <p className={styles.text}>댓글 수정</p>
          </div>
        ) : (
          <div className={styles.inWrapper}>
            <TrashCanSvg />
            <p className={styles.text}>댓글 삭제</p>
          </div>
        )}
      </motion.div>
    </motion.button>
  );
}

export default ActionButton;
