import styles from '@/components/atoms/Button/ReSignButton/ReSignButton.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

const cn = classNames.bind(styles);

interface ResignButtonProps {
  type: 'cancel' | 'delete';
  children: ReactNode;
}

function ResignButton({ type, children }: ResignButtonProps) {
  const router = useRouter();
  const handleCancelClick = () => {
    // TODO: 이 버튼 누르면 피드 화면으로 이동하도록
    router.back();
  };
  // TODO: delete 클릭은 닉네임과 일치할 때 활성화 되도록
  const handleDeleteClick = () => {
    router.push('/');
  };
  return (
    <button
      type="button"
      className={cn('button', type)}
      onClick={type === 'cancel' ? handleCancelClick : handleDeleteClick}
    >
      {children}
    </button>
  );
}

export default ResignButton;
