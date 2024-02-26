import styles from '@/components/atoms/Button/FollowToggleButton/FollowToggleButton.module.scss';

import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cn = classNames.bind(styles);

interface FollowToggleButtonProps {
  onClick: () => void;
  children: ReactNode;
}

function FollowToggleButton({ onClick, children }: FollowToggleButtonProps) {
  return (
    <button type="button" onClick={onClick} className={cn('button', children)}>
      {children}
    </button>
  );
}

export default FollowToggleButton;
