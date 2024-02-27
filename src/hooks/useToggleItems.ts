import useDeletePost from '@/apis/Query/Post/useDeletePost';
import {
  deleteRecordSnapshots,
  postRecordSnapshots,
} from '@/apis/recordController';
import {
  POST_UPDATE,
  RECORD_DELETE,
  RECORD_SAVE,
  RECORD_UPDATE,
  POST_DELETE,
  postItems,
  profileItems,
  recordsItems,
  snapShotItem,
  SNAPSHOT_DELETE,
} from '@/constants/ToggleMenu';
import useModalInfo from '@/hooks/useModalInfo';
import { ToggleMenuProp } from '@/types/toggle';
import { atom, useAtomValue, useSetAtom } from 'jotai';

import { usePathname, useRouter } from 'next/navigation';

export const snapshotId = atom<number>(0);

function useToggleItems({ type, id }: ToggleMenuProp) {
  const router = useRouter();
  const pathName = usePathname();
  const { showModal } = useModalInfo();
  const handleDeletePost = useDeletePost();

  let menuItems = [];

  const snapShot = useSetAtom(snapshotId);
  const readSnapShot = useAtomValue(snapshotId);

  if (type === 'profile') menuItems = profileItems;
  if (type === 'post') {
    menuItems = postItems;
  } else {
    menuItems = recordsItems;
  }
  if (type === 'records') {
    menuItems = recordsItems;
  }

  //TODO: POST_REPORT만 가져올 수 있도록
  if (type === 'postReport') {
    menuItems = postItems;
  }

  if (type === 'snapShotBpx') {
    menuItems = snapShotItem;
  }

  const handleOnClick = async (item: string, recordId?: number) => {
    // *: 여기에 토글 메뉴에 관련한 기능 추가해주시면 됩니다.
    //TODO: 스냅샷 저장 성공시 저장된 항목 페이지로 이동해야 됌
    switch (item) {
      case RECORD_SAVE:
        const response = await postRecordSnapshots(recordId as number);
        snapShot(response.data.id);
        break;
      case POST_UPDATE:
        router.push(`/records/recordId`);
        break;
      case RECORD_UPDATE:
        router.push(`/records/${recordId}`);
        break;
      case SNAPSHOT_DELETE:
        await deleteRecordSnapshots(readSnapShot as number);
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
