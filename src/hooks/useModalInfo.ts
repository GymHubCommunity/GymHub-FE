import { atom, useAtom } from 'jotai';

const isShowAtom = atom(false);

function useModalInfo() {
  const [isShow, setIsShow] = useAtom(isShowAtom);
  const showModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };
  return { isShow, showModal, closeModal };
}

export default useModalInfo;
