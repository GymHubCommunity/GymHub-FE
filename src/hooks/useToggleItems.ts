import {
  POST_UPDATE,
  postItems,
  profileItems,
  recordsItems,
} from '@/constants/ToggleMenu';
import useModalInfo from '@/hooks/useModalInfo';
import { ToggleMenuProp } from '@/types/toggle';

import { usePathname, useRouter } from 'next/navigation';

function useToggleItems({ type }: ToggleMenuProp) {
  const router = useRouter();
  const pathName = usePathname();
  const { showModal } = useModalInfo();
  const menuItems =
    type === 'profile'
      ? profileItems
      : type === 'post'
        ? postItems
        : recordsItems;

  const handleOnClick = (item: string) => {
    // TODO: 여기에 토글 메뉴에 관련한 기능 추가해주시면 됩니다.
    switch (item) {
      case POST_UPDATE:
        router.push('/records/[recordId]');
      default:
        showModal();
    }
  };
  return { pathName, menuItems, handleOnClick };
}

export default useToggleItems;
