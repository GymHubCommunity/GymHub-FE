import LikeSvg from '@/assets/icons/LikeSvg';
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
      <p className={cn('count', type)}>{count}</p>
    </button>
  );
}

export default LikeButton;
