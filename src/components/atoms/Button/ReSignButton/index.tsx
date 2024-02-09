import styles from '@/components/atoms/Button/ReSignButton/ReSignButton.module.scss';
import useResignButton from '@/hooks/useResignButton';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cn = classNames.bind(styles);

interface ResignButtonProps {
  type: 'cancel' | 'delete';
  children: ReactNode;
}

function ResignButton({ type, children }: ResignButtonProps) {
  const { handleCancelClick, handleDeleteClick, isCheckName } =
    useResignButton();

  return (
    <button
      type="button"
      className={cn('button', type)}
      onClick={type === 'cancel' ? handleCancelClick : handleDeleteClick}
      disabled={type === 'delete' && isCheckName}
    >
      {children}
    </button>
  );
}

export default ResignButton;
