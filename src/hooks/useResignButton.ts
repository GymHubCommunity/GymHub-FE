import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

function useResignButton() {
  const isCheckName = useAtomValue(isCheckNameAtom);
  const router = useRouter();
  const handleCancelClick = () => {
    // TODO: 이 버튼 누르면 피드 화면으로 이동하도록
    router.back();
  };
  // TODO: delete 클릭은 닉네임과 일치할 때 활성화 되도록
  const handleDeleteClick = () => {
    router.push('/');
  };
  return { handleCancelClick, handleDeleteClick, isCheckName };
}

export default useResignButton;
