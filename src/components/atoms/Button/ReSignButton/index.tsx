import styles from '@/components/atoms/Button/ReSignButton/ReSignButton.module.scss';
import useResignButton from '@/hooks/useResignButton';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';

const cn = classNames.bind(styles);

interface ResignButtonProps {
  type: 'cancel' | 'delete';
  children: ReactNode;
  memberId?: number;
}

function ResignButton({ type, children, memberId }: ResignButtonProps) {
  const { handleCancelClick, handleDeleteClick, isCheckName } =
    useResignButton();

  return (
    <button
      type="button"
      className={cn('button', type)}
      onClick={
        type === 'cancel'
          ? handleCancelClick
          : () => handleDeleteClick(memberId as number)
      }
      disabled={type === 'delete' && isCheckName}
    >
      {children}
    </button>
  );
}

export default ResignButton;
