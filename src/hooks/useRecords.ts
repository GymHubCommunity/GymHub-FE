import useGetRecords from '@/apis/Query/Records/useGetRecords';
import DateFormat from '@/utils/DateFormat';
import useModalInfo from './useModalInfo';
import useSelectedDate from './useSelectedDate';
import useToggleMenu from './useToggleMenu';

function useRecords() {
  const { selectedDate } = useSelectedDate();
  const { isShow, closeModal } = useModalInfo();
  const { isOpen, closeMenu, toggleMenu } = useToggleMenu();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const { year, month, day } = DateFormat(selectedDate as Date);

  const { data, isLoading } = useGetRecords(year, month);

  return {
    isShow,
    closeModal,
    isOpen,
    closeMenu,
    toggleMenu,
    targetDate,
    day,
    data,
    isLoading,
  };
}

export default useRecords;
