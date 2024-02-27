import { deleteUser } from '@/apis/user/register';
import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

function useResignButton() {
  const isCheckName = useAtomValue(isCheckNameAtom);
  const router = useRouter();
  const handleCancelClick = () => {
    router.push('/');
  };

  const handleDeleteClick = async (memberId: number) => {
    await deleteUser(memberId);
    router.push('/signin');
  };

  return { handleCancelClick, handleDeleteClick, isCheckName };
}

export default useResignButton;
