import { atom, useAtom } from 'jotai';
import { toast } from 'react-hot-toast';

const isVisibleAtom = atom(false);

function useShareToast() {
  const [isVisible, setIsVisible] = useAtom(isVisibleAtom);
  const openToast = () => {
    setIsVisible(true);
    navigator.clipboard.writeText(window.location.href);
    toast.success('주소가 복사되었습니다');
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };
  const closeToast = () => {
    setIsVisible(false);
  };
  return { isVisible, openToast, closeToast };
}

export default useShareToast;
