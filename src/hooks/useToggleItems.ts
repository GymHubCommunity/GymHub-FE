import useDeletePost from '@/apis/Query/useDeletePost';
import {
  POST_DELETE,
  POST_UPDATE,
  RECORD_DELETE,
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
  const handleDeletePost = useDeletePost();

  let menuItems = [];

  if (type === 'profile') menuItems = profileItems;
  if (type === 'post') {
    menuItems = postItems;
  } else {
    menuItems = recordsItems;
  }

  const handleOnClick = async (item: string) => {
    switch (item) {
      case POST_UPDATE:
        pathName === '/'
          ? router.replace(`post/${id}/edit`)
          : router.replace(`${id}/edit`);
        break;
      case POST_DELETE:
        handleDeletePost.mutateAsync({ id: id as number });
        break;
      case RECORD_DELETE:
        showModal();
        break;
      default:
        break;
    }
  };
  return { pathName, menuItems, handleOnClick };
}

export default useToggleItems;
