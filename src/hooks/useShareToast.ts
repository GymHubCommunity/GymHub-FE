import { atom, useAtom } from 'jotai';

const isVisibleAtom = atom(false);

function useShareToast() {
  const [isVisible, setIsVisible] = useAtom(isVisibleAtom);
  const openToast = () => {
    setIsVisible(true);
    navigator.clipboard.writeText(window.location.href);
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
