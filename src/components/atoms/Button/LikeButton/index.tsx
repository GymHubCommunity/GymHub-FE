import LikeSvg from '@/assets/icons/LikeSvg';
import commonStyles from '@/components/atoms/Button/CommonStyle.module.scss';
import styles from '@/components/atoms/Button/LikeButton/LikeButton.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface LikeButtonProps {
  type: 'post' | 'comment';
  isLike: boolean;
  handleLike: () => void;
  count: number;
}

function LikeButton({ type, isLike, handleLike, count }: LikeButtonProps) {
  return (
    <button onClick={handleLike} className={cn('wrapper', type)}>
      <LikeSvg type={isLike} />
      <p className={commonStyles.count}>{count}</p>
    </button>
  );
}

export default LikeButton;
