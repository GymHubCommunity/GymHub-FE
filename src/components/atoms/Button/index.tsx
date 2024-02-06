import styles from '@/components/atoms/Button/Button.module.scss';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cn = classNames.bind(styles);

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  size: 'sm' | 'md' | 'lg';
  color: string;
}

function Button({ onClick, children, size, color }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('button', size, color)}
    >
      {children}
    </button>
  );
}

export default Button;
