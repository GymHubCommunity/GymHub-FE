import {
  POST_UPDATE,
  postItems,
  profileItems,
  recordsItems,
} from '@/constants/ToggleMenu';
import useModalInfo from '@/hooks/useModalInfo';
import { ToggleMenuProp } from '@/types/toggle';

import { usePathname, useRouter } from 'next/navigation';

function useToggleItems({ type, id }: ToggleMenuProp) {
  const router = useRouter();
  const pathName = usePathname();
  const { showModal } = useModalInfo();

  let menuItems = [];

  if (type === 'profile') menuItems = profileItems;
  if (type === 'post') {
    menuItems = postItems;
  } else {
    menuItems = recordsItems;
  }

  const handleOnClick = (item: string) => {
    // TODO: 여기에 토글 메뉴에 관련한 기능 추가해주시면 됩니다.
    switch (item) {
      case POST_UPDATE:
        router.push(`post/${id}/edit`);
        break;
      default:
        showModal();
        break;
    }
  };
  return { pathName, menuItems, handleOnClick };
}

export default useToggleItems;
