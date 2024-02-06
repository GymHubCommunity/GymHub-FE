import styles from '@/components/atoms/Button/Button.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface ButtonProps {
  onClick: () => void;
  content: string;
  size: 'sm' | 'md' | 'lg';
  color: string;
}

function Button({ onClick, content, size, color }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('button', size, color)}
    >
      {content}
    </button>
  );
}

export default Button;
