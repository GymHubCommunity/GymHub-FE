import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

function useResignButton() {
  const isCheckName = useAtomValue(isCheckNameAtom);
  const router = useRouter();
  const handleCancelClick = () => {
    router.push('/');
  };
  // TODO: delete 클릭은 닉네임과 일치할 때 활성화 되도록
  const handleDeleteClick = () => {
    router.push('/');
  };
  return { handleCancelClick, handleDeleteClick, isCheckName };
}

export default useResignButton;
